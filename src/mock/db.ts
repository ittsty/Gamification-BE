export const users = [
  { uid: 'u1', totalpoint: 8000 },
  { uid: 'u2', totalpoint: 3000 },
];

export const playHistory: {
  id: string;
  uid: string;
  point: number;
  created_at: Date;
}[] = [];

export const rewards = [
  { id: 'A', point: 5000 },
  { id: 'B', point: 7500 },
  { id: 'C', point: 10000 },
];

export const rewardHistory: {
  id: string;
  uid: string;
  rewardid:string;
  created_at: Date;
}[] = [];