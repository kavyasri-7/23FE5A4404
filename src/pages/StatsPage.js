import React from "react";

export default function StatsPage({ urls }) {
  const total = urls.length;
  const limited = urls.filter((u) => u.validity).length;
  const unlimited = total - limited;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total URLs: {total}</p>
      <p>With Expiry: {limited}</p>
      <p>Unlimited: {unlimited}</p>
    </div>
  );
}
