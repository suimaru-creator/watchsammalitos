export function StreamPlayer({ channel }: { channel: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black shadow-lg">
      <iframe
        src={`https://player.kick.com/${channel}`}
        title={`${channel} live stream`}
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
