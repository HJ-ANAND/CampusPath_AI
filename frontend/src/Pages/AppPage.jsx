import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

function AppPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useUser();
  const [formType, setFormType] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loadingDesc, setLoadingDesc] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [location, setLocation] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [extractedDetails, setExtractedDetails] = useState(null);
  const [matches, setMatches] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [reports, setReports] = useState(() => {
    const saved = localStorage.getItem('activeReports');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('activeReports', JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        setIsSyncing(true);
        try {
          // Trigger Deep Match Sync
          await axios.post(`${API_BASE_URL}/items/sync/${user.id}`);

          // Fetch Reports
          const repRes = await axios.get(`${API_BASE_URL}/items/user/${user.id}`);
          setReports(repRes.data);

          // Fetch Matches
          const matchRes = await axios.get(`${API_BASE_URL}/matches/user/${user.id}`);
          setMatches(matchRes.data);

          // Fetch Notifications
          const notifRes = await axios.get(`${API_BASE_URL}/notifications/${user.id}`);
          setNotifications(notifRes.data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setTimeout(() => setIsSyncing(false), 1000);
        }
      };
      fetchData();
    }
  }, [user]);

  const handleAcceptMatch = async (matchId) => {
    try {
      await axios.patch(`${API_BASE_URL}/matches/${matchId}`, { status: "accepted" });
      // Refresh matches
      const response = await axios.get(`${API_BASE_URL}/matches/user/${user.id}`);
      setMatches(response.data);
    } catch (e) {
      console.error("Failed to accept match:", e);
    }
  };

  const handleRejectMatch = async (matchId) => {
    try {
      await axios.patch(`${API_BASE_URL}/matches/${matchId}`, { status: "rejected" });
      setMatches(matches.filter(m => m._id !== matchId));
    } catch (e) {
      console.error("Failed to reject match:", e);
    }
  };

  const handleMarkRead = async (notifId) => {
    try {
      await axios.patch(`${API_BASE_URL}/notifications/${notifId}/read`);
      setNotifications(notifications.map(n => n._id === notifId ? { ...n, isRead: true } : n));
    } catch (e) {
      console.error("Failed to mark read:", e);
    }
  };

  useEffect(() => {
    const action = searchParams.get("action");
    if (action === "lost" || action === "found") {
      setFormType(action);
      // Clean up the URL quietly so it doesn't reopen if the user refreshes
      setSearchParams(new URLSearchParams());
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (description) console.log("Description updated:", description);
  }, [description]);

  const generateDescription = async () => {
    if (!description.trim()) return;
    setLoadingDesc(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/items/enhance`, {
        description: description,
        type: formType,
      });
      const { title: aiTitle, description: aiDesc, metadata } = response.data;
      setDescription(aiDesc);
      setTitle(aiTitle);
      setExtractedDetails(metadata);
    } catch (e) {
      console.error("Enhancement error:", e);
      alert("Error generating enhancement.");
    } finally {
      setLoadingDesc(false);
    }
  };

  const generateTitle = async () => {
    // Since generateDescription now also generates title, we can just reuse the same logic
    // or let the user regenerate specifically if they want.
    if (!description.trim()) {
      alert("Please write a description first.");
      return;
    }
    setLoadingTitle(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/items/enhance`, {
        description: description,
        type: formType,
      });
      setTitle(response.data.title);
    } catch (e) {
      alert("Error generating title.");
    } finally {
      setLoadingTitle(false);
    }
  };

  return (
    <div className="w-full relative font-sans text-slate-800 min-h-screen flex flex-col pt-32 px-6 lg:px-12 xl:px-20 overflow-hidden">
      
      {/* ── DASHBOARD UI ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10 animate-fade-up">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-black text-[#0B1528] tracking-tighter leading-none mb-4">
              Dashboard
            </h1>
            <p className="text-xl text-slate-500 font-semibold max-w-lg">
              Welcome back, <span className="text-[#5cb9a5]">{user?.firstName || 'User'}</span>! Manage your reports or start a new recovery process here.
            </p>
          </div>
          {/* Notifications & Sync */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                  notifications.some(n => !n.isRead)
                    ? "bg-[#5cb9a5]/10 border-[#5cb9a5]/20 text-[#5cb9a5]"
                    : "bg-white/60 border-white/50 text-slate-400"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {notifications.some(n => !n.isRead) && (
                  <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-4 w-80 md:w-96 bg-white/95 backdrop-blur-md rounded-[2rem] shadow-2xl border border-slate-100 z-[150] overflow-hidden animate-in slide-in-from-top-4 duration-300">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-lg font-black text-[#0B1528]">Notifications</h3>
                    <span className="text-xs font-bold text-[#5cb9a5] bg-[#5cb9a5]/10 px-2 py-1 rounded-lg">
                      {notifications.filter(n => !n.isRead).length} New
                    </span>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-10 text-center text-slate-400 font-bold">No notifications yet.</div>
                    ) : (
                      notifications.map(notif => (
                        <div
                          key={notif._id}
                          onClick={() => handleMarkRead(notif._id)}
                          className={`p-5 border-b border-slate-50 last:border-0 cursor-pointer transition-colors ${
                            notif.isRead ? "opacity-60" : "bg-[#5cb9a5]/5"
                          }`}
                        >
                          <p className="text-sm font-bold text-slate-700 leading-snug">{notif.message}</p>
                          <span className="text-[10px] font-black text-slate-400 uppercase mt-2 block tracking-widest">{new Date(notif.createdAt).toLocaleString()}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {isSyncing && (
              <div className="flex items-center gap-3 bg-[#5cb9a5]/10 text-[#2d5c53] px-6 py-3 rounded-2xl font-bold animate-pulse border border-[#5cb9a5]/20 shadow-lg shadow-[#5cb9a5]/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                  <path d="M17.5 19c.7 0 1.3-.2 1.8-.7s.7-1.1.7-1.8c0-.6-.2-1.2-.6-1.7-.4-.5-1-.8-1.7-.9-.1-1.4-.7-2.6-1.7-3.4-1-.8-2.2-1.2-3.5-1.2-1.6 0-3.1.7-4.2 2-1.1 1.3-1.4 3-1 4.5-.8.1-1.5.5-2 1.1-.5.6-.8 1.4-.8 2.2 0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h10z"/>
                </svg>
                Cloud Syncing...
              </div>
            )}
          </div>
        </div>

        {/* ── Action Cards ── */}
        <div className="grid md:grid-cols-2 gap-8 xl:gap-10 mb-20">
          
          {/* Lost Item Card */}
          <div onClick={() => setFormType('lost')} className="cursor-pointer group relative bg-white/60 backdrop-blur-md border border-white/50 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/20 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#0B1528] flex items-center justify-center shrink-0 shadow-lg shadow-[#0B1528]/20 group-hover:bg-[#152342] transition-colors mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="text-2xl font-black text-[#0B1528] mb-3">Report a Lost Item</h3>
            <p className="text-slate-500 text-[16px] leading-relaxed font-bold">
              Misplaced something? Provide detailed information to help our AI match it with found items in your community.
            </p>
          </div>

          {/* Found Item Card */}
          <div onClick={() => setFormType('found')} className="cursor-pointer group relative bg-[#5cb9a5] border border-[#4ea693] p-10 rounded-[2.5rem] shadow-xl shadow-[#5cb9a5]/30 hover:-translate-y-2 transition-all duration-300">
             <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0 mb-6 transition-colors group-hover:bg-white/30">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
             </div>
             <h3 className="text-2xl font-black text-white mb-3">Submit a Found Item</h3>
             <p className="text-white/90 text-[16px] leading-relaxed font-semibold">
               Found someone's belongings? Log it here. Our AI will instantly try to connect it with people searching nearby.
             </p>
          </div>

        </div>

        {/* ── Potential Matches ── */}
        {matches.length > 0 && (
          <div className="mb-20 animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#5cb9a5] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1528]">Potential Matches Detected</h2>
              <span className="bg-[#5cb9a5]/10 text-[#5cb9a5] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">AI Powered</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matches.map((match) => {
                const isLostOwner = match.lostItemId.userId === user.id;
                const otherItem = isLostOwner ? match.foundItemId : match.lostItemId;
                
                return (
                  <div key={match._id} className="group relative bg-white/80 backdrop-blur-md border-2 border-[#5cb9a5]/20 p-8 rounded-[2.5rem] shadow-xl shadow-[#5cb9a5]/5 hover:border-[#5cb9a5] transition-all duration-500">
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5cb9a5] rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-[#5cb9a5]/30">
                       <span className="text-xs font-black leading-none">{Math.round(match.score * 100)}%</span>
                       <span className="text-[8px] font-bold uppercase tracking-tighter">Match</span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{otherItem.type} item Found</span>
                         <span className="text-sm font-bold text-slate-700">{otherItem.location}</span>
                       </div>
                    </div>

                    <h4 className="text-lg font-black text-[#0B1528] mb-3 leading-tight line-clamp-1">{otherItem.title}</h4>
                    <p className="text-sm text-slate-500 font-medium mb-8 line-clamp-2 leading-relaxed">
                      {otherItem.description}
                    </p>

                    <div className="flex items-center gap-3">
                      {isLostOwner && match.status === "pending" ? (
                        <>
                          <button 
                            onClick={() => handleAcceptMatch(match._id)}
                            className="flex-1 bg-[#5cb9a5] text-white py-3 rounded-xl font-black text-sm shadow-lg shadow-[#5cb9a5]/20 hover:-translate-y-1 transition-all"
                          >
                            This is mine!
                          </button>
                          <button 
                            onClick={() => handleRejectMatch(match._id)}
                            className="px-4 py-3 rounded-xl border-2 border-slate-100 text-slate-400 hover:bg-slate-50 transition-all"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                          </button>
                        </>
                      ) : (
                        <div className={`w-full py-3 rounded-xl font-black text-sm text-center ${
                          match.status === "accepted" ? "bg-green-50 text-green-600 border border-green-100" : "bg-slate-50 text-slate-400"
                        }`}>
                          {match.status === "accepted" ? "🎉 MATCH CONFIRMED" : "WAITING FOR OWNER"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Activity / Reports ── */}
        {reports.length === 0 ? (
          <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-[2.5rem] p-10 text-center shadow-sm">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
             </div>
             <h4 className="text-xl font-bold text-slate-700 mb-2">No Active Reports</h4>
             <p className="text-slate-500 font-medium">You haven't reported any lost or found items recently.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0B1528] mb-6">Active Reports</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div key={report._id || report.id} className="bg-white/70 backdrop-blur-sm border border-white/50 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${report.type === 'lost' ? 'bg-[#0B1528]' : 'bg-[#5cb9a5]'}`}></div>
                  <div className="flex justify-between items-start mb-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${report.type === 'lost' ? 'bg-slate-100 text-slate-600' : 'bg-[#5cb9a5]/10 text-[#5cb9a5]'}`}>
                       {report.type} Item
                     </span>
                     <span className="text-xs font-semibold text-slate-400">{report.date}</span>
                  </div>
                  <h4 className="text-lg font-black text-[#0B1528] mb-2 leading-tight">{report.title}</h4>
                  <p className="text-sm text-slate-500 font-medium line-clamp-2 mb-4">{report.description}</p>
                  
                  {(report.location || report.incidentTime) && (
                    <div className="flex flex-col gap-1 pt-3 border-t border-slate-100">
                      {report.location && (
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          {report.location}
                        </div>
                      )}
                      {report.incidentTime && (
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                          {report.incidentTime}
                        </div>
                      )}
                    </div>
                  )}
                  {report.isSyncing && (
                    <div className="absolute bottom-3 right-5 flex items-center gap-1.5">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cb9a5" strokeWidth="3" className="animate-spin-slow">
                         <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                       </svg>
                       <span className="text-[10px] font-black text-[#5cb9a5] uppercase tracking-widest animate-pulse">
                         Syncing...
                       </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ══════════════════════════════════════════════════════
          AI REPORT MODAL
      ══════════════════════════════════════════════════════ */}
      {formType && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-[0_32px_100px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-[#0B1528]">{formType === 'lost' ? 'Report Lost Item' : 'Submit Found Item'}</h2>
                <button onClick={() => setFormType(null)} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0B1528] hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-[14px] font-black text-slate-800 mb-2 uppercase tracking-wider">{formType === 'lost' ? 'What did you lose?' : 'What did you find?'}</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border-2 border-slate-100 bg-slate-50/50 p-5 rounded-2xl focus:ring-4 focus:ring-[#5cb9a5]/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all resize-none min-h-[140px] text-slate-800 font-semibold" placeholder={formType === 'lost' ? "Describe the item in detail (brand, color, location)..." : "Describe what you found and where..."} />
                  <button onClick={generateDescription} disabled={loadingDesc} className="mt-4 self-start bg-white border-2 border-[#0B1528] text-[#0B1528] px-6 py-2.5 rounded-xl font-black text-[14px] hover:bg-slate-50 transition-all disabled:opacity-50 flex items-center gap-2">
                    {loadingDesc ? "Optimizing..." : "✨ Enhance Description with AI"}
                  </button>
                </div>
                <div className="flex flex-col pt-2">
                  <label className="text-[14px] font-black text-slate-800 mb-2 uppercase tracking-wider">Generated Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-2 border-slate-100 bg-slate-50/50 p-5 rounded-2xl focus:ring-4 focus:ring-[#5cb9a5]/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all text-slate-800 font-bold" placeholder="Auto-generated title..." />
                  <button onClick={generateTitle} disabled={loadingTitle} className="mt-4 self-start bg-[#5cb9a5]/10 text-[#2d5c53] px-6 py-2.5 rounded-xl font-black text-[14px] hover:bg-[#5cb9a5]/20 transition-all disabled:opacity-50 border border-[#5cb9a5]/20">
                    {loadingTitle ? "Generating..." : "💡 Generate Smart Title"}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[14px] font-black text-slate-800 mb-2 uppercase tracking-wider">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border-2 border-slate-100 bg-slate-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-[#5cb9a5]/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all text-slate-800 font-bold" placeholder="Where did it happen?" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[14px] font-black text-slate-800 mb-2 uppercase tracking-wider">Time</label>
                    <input type="text" value={incidentTime} onChange={(e) => setIncidentTime(e.target.value)} className="w-full border-2 border-slate-100 bg-slate-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-[#5cb9a5]/10 focus:border-[#5cb9a5] focus:bg-white outline-none transition-all text-slate-800 font-bold" placeholder="When (e.g. yesterday 2pm)" />
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button onClick={async () => {
                    if (!title.trim() || !description.trim() || !location.trim() || !incidentTime.trim()) {
                      alert("Please fill in all fields.");
                      return;
                    }
                    
                    const optimisticReport = {
                      _id: Date.now().toString(), // Temp ID
                      id: Date.now(),
                      type: formType,
                      title: title,
                      description: description,
                      location: location,
                      incidentTime: incidentTime,
                      status: "active",
                      date: new Date().toLocaleDateString(),
                      isSyncing: true
                    };

                    // Optimistic update
                    setReports([optimisticReport, ...reports]);
                    setFormType(null);
                    setIsSyncing(true);

                    try {
                      const response = await axios.post(`${API_BASE_URL}/items`, {
                        userId: user.id,
                        type: formType,
                        title,
                        description,
                        location,
                        incidentTime,
                        extractedDetails
                      });

                      // Replace optimistic entry with real DB data
                      setReports(prev => prev.map(r => r._id === optimisticReport._id ? response.data : r));
                    } catch (error) {
                      console.error("Submission failed:", error);
                      alert("Failed to sync with cloud. Changes saved locally.");
                    } finally {
                      setTimeout(() => setIsSyncing(false), 2000); // Keep sync visible for 2s
                      setTitle("");
                      setDescription("");
                      setLocation("");
                      setIncidentTime("");
                      setExtractedDetails(null);
                    }
                  }} className="w-full bg-[#5cb9a5] text-white px-6 py-4 rounded-2xl font-black shadow-[0_15px_30px_rgba(92,185,165,0.25)] hover:bg-[#4ea693] hover:-translate-y-1 transition-all text-lg">
                    Submit Final Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppPage;
