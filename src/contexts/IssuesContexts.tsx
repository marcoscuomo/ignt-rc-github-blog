import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issue {
  url: string
  repository_url: string
  html_url: string
  id: number
  number: number
  title: string
  body: string
  created_at: Date
}

interface Issues {
  total_count: number
  items: Issue[]
}

interface IssueContext {
  issues?: Issues
  fetchIssues: (query?: string) => Promise<void>
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContext)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issues>()

  const fetchIssues = async (query = '') => {
    const response = await api.get(
      `search/issues?q=repo:marcoscuomo/ignt-rc-github-blog+${query}`,
    )
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])
  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
