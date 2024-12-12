
import { useEffect, useState } from 'react';

const DataPage = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/users?select=*`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
		console.log('result:', result);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data ? (
        <pre className='bg-slate-100 text-sm p-2'>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataPage;
