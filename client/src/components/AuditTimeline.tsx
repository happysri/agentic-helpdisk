type Item = { action: string; actor: string; timestamp?: string; meta?: any }

export default function AuditTimeline({ items }: { items: Item[] }) {
  return (
    <div className="card">
      <h3>Audit Timeline</h3>
      <ul className="list">
        {items.map((it, i) => (
          <li key={i}>
            <div><b>{it.action}</b> <span className="badge">{it.actor}</span></div>
            {it.timestamp && <div className="small">{new Date(it.timestamp).toLocaleString()}</div>}
            {it.meta && <pre className="mono">{JSON.stringify(it.meta, null, 2)}</pre>}
          </li>
        ))}
      </ul>
    </div>
  )
}
