import { Suspense } from "react";
import { HealthStatusClient } from "../components/HealthStatusClient";

async function HealthStatus() {
  const response = await fetch(`${process.env.API_URL}/health/`);
  const health = await response.json();
  return <p>{health.status}</p>;
}

export default function Page() {
  return (
    <main>
      <Suspense fallback={<p>Carregando...</p>}>
        <HealthStatus />
      </Suspense>
      <HealthStatusClient />
    </main>
  );
}
