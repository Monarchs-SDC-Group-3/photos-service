import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    {duration: '30s', target: 15 },
    {duration: '2m', target: 50 },
    {duration: '10m', target: 750 },
    {duration: '2m', target: 50 },
    {duration: '30s', target: 15 },
  ]
};

export default function () {
  const id = Math.floor(Math.random() * 10000000) + 1;
  const res = http.get(`http://localhost:3001/api/homes/${id}/photos`);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
    'no errors': (r) => !r.error,
  });
  // sleep(0.05);
}