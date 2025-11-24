import React from "react";
import { X } from "lucide-react";

export default function Notifications({ desktopNotifOpen, mobileNotifOpen, setMobileNotifOpen, setDesktopNotifOpen, notifications = [], activities = [], contacts = [] }) {
  return (
    <>
      {/* Right Sidebar (desktop) - shown only when open */}
      {desktopNotifOpen && (
        <div className="hidden lg:flex flex-col w-80 px-6 py-6 border-l border-border overflow-y-auto bg-background space-y-8 transition-all duration-300">
          {/* Notifications */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-lg flex-shrink-0 ${notification.type === "bug" ? "bg-[hsl(var(--dashboard-danger)/0.1)]" : "bg-muted"}`}>
                      <Icon size={16} className={notification.type === "bug" ? "text-[hsl(var(--dashboard-danger))]" : "text-muted-foreground"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug">{notification.text}</p>
                      <p className="text-xs text-muted-foreground mt-1.5">{notification.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm flex-shrink-0">{activity.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug">{activity.text}</p>
                      <p className="text-xs text-muted-foreground mt-1.5">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contacts</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm flex-shrink-0">{contact.avatar}</div>
                  <span className="text-sm text-foreground">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Notification Panel (always mounted so we can transition in/out smoothly) */}
      <div className={`fixed inset-0 z-50 flex justify-end md:hidden ${mobileNotifOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!mobileNotifOpen}>
        {/* Overlay - fades in/out */}
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${mobileNotifOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileNotifOpen(false)} aria-label="Close notifications" />

        {/* Panel - translateX from 100% -> 0 */}
        <div className={`relative w-full sm:w-80 h-full bg-background border-l border-border px-6 py-6 overflow-y-auto space-y-8 shadow-xl transform transition-all duration-300 ease-out ${mobileNotifOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          {/* Close button */}
          <button className="absolute top-4 right-4 p-2 rounded-lg bg-background border border-border" onClick={() => setMobileNotifOpen(false)} aria-label="Close notifications">
            <X size={24} />
          </button>

          {/* Notifications */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-foreground mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-lg flex-shrink-0 ${notification.type === "bug" ? "bg-[hsl(var(--dashboard-danger)/0.1)]" : "bg-muted"}`}>
                      <Icon size={16} className={notification.type === "bug" ? "text-[hsl(var(--dashboard-danger))]" : "text-muted-foreground"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug">{notification.text}</p>
                      <p className="text-xs text-muted-foreground mt-1.5">{notification.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm flex-shrink-0">{activity.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug">{activity.text}</p>
                      <p className="text-xs text-muted-foreground mt-1.5">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contacts</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm flex-shrink-0">{contact.avatar}</div>
                  <span className="text-sm text-foreground">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
