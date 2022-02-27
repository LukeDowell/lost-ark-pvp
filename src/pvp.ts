export interface Lobby {
  id: string,
  members: Competitor[]
}

export interface Team {
  id: string,
  name: string,
  members: Competitor[]
}

export interface Competitor {
  id: string,
  name: string
}
