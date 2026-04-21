const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const Message = require("./models/messageModel");
const Notification = require("./models/notificationModel");
const Match = require("./models/matchModel");
const { getUserEmail } = require("./utils/clerkClient");
const { sendMatchEmail } = require("./utils/emailService");

const PORT = process.env.PORT || 7860;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join_room", (matchId) => {
    socket.join(matchId);
    console.log(`User joined room: ${matchId}`);
  });

  socket.on("send_message", async (data) => {
    const { matchId, senderId, text } = data;

    try {
      // 1. Save message to DB
      const newMessage = await Message.create({ matchId, senderId, text });

      // 2. Broadcast to the room
      io.to(matchId).emit("receive_message", newMessage);

      // 3. Notify recipient (Find other user in match)
      const match = await Match.findById(matchId).populate("lostItemId foundItemId");
      if (match) {
        const recipientId = match.lostItemId.userId === senderId 
          ? match.foundItemId.userId 
          : match.lostItemId.userId;
        
        // Create In-App Notification
        await Notification.create({
          userId: recipientId,
          message: `💬 New message about "${match.lostItemId.title}" — tap to continue the conversation.`,
          type: "chat_message",
          relatedId: matchId,
        });

        // Send Email Notification (Background)
        getUserEmail(recipientId).then(email => {
          if (email) {
            // Reusing sendMatchEmail or creating a new one
          }
        });
      }
    } catch (error) {
      console.error("Socket error:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
