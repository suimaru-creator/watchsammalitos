import { MessageCircle } from 'lucide-react'

export function StreamChat({ channel }: { channel: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <MessageCircle className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-card-foreground">Live Chat</h2>
      </div>
      <iframe
        src={`https://kick.com/${channel}/chatroom`}
        title={`${channel} live chat`}
        className="min-h-[420px] w-full flex-1 bg-background"
      />
    </div>
  )
}
