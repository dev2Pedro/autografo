"use client";
import { useEffect, useState } from "react";

export function HealthStatusClient() {
  const [status, setStatus] = useState("carregando...");

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`);
      const data = await resposta.json();
      setStatus(data.status);
    }
  }, []);

  return <div>{status}</div>;
}
