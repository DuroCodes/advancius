import React, { useState, useEffect } from 'react';


export interface IPlayers {
  online: number;
  max: number;
}

export interface IServerData {
  ip: string;
  port: number;
  players: IPlayers;
  version: string;
  online: boolean;
}

export default function getPlayers() {
  const [playerInfo, setPlayerInfo] = useState('');

  const fetchData = async () => {
    const response = await fetch('https://api.mcsrvstat.us/2/mc.advancius.net');
    const { players } = await response.json() as IServerData;
    setPlayerInfo(`Players: ${players?.online || 0}/${players?.max || 0}`);
  };

  useEffect(() => {
    fetchData();
  });

  return <li>{playerInfo}</li>;
}
