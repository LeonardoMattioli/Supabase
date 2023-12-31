'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'



export default function Home() {
  const [todos, setTodos] = useState<any>(null)
  const [session, setSession] = useState<any>(null)
  const supabase = createClientComponentClient<any>()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('todos').select()
      const { session } = (await supabase.auth.getSession()).data;
      setTodos(data)
      setSession(session);
    }

    getData()
  }, [])
  if(!session){
    return (
      <h1 id="logado">Você não está logado</h1>
    )
  }
  return (
      todos ? <span id="vai"><pre>{JSON.stringify(todos, null, 2)}</pre></span> : <p>Loading todos...</p>
  )
}