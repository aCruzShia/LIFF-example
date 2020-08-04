import React, { useEffect, useState } from 'react'
import Liff from '@line/liff'

function App() {
  const [profile, setProfile] = useState<any>()
  useEffect(() => {
    Liff.init({ liffId: '1653573972-GMOV2QQK' }, () => {
      if (!Liff.isLoggedIn()) {
        Liff.login()
        return
      }
      Liff.getProfile().then((data) => {
        setProfile(data)
      })
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Line user profile: <br />
        <p>
          <img src={profile?.pictureUrl} style={{ width: 40, height: 40, borderRadius: '50%' }} alt="pic" />
        </p>
        <p>userId: {profile?.userId}</p>
        <p>userName: {profile?.displayName}</p>
        status: {profile?.statusMessage}
      </header>
    </div>
  )
}

export default App
