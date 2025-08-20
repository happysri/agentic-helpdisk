export default function Settings(){
  return (
    <div>
      <h2>Settings</h2>
      <div className="card">
        <div>VITE_API = <code>{import.meta.env.VITE_API || 'http://localhost:8080'}</code></div>
        <div className="small">Adjust in your frontend env if deploying.</div>
      </div>
    </div>
  )
}
