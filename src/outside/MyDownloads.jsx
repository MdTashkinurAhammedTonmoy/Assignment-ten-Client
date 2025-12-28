import React, { use, useEffect, useState } from 'react';
import Loading from '../pages/Loading';
import { AuthContext } from '../provider/AuthProvider';
import ModelCard from './ModelCard';

const MyDownloads = () => {

    const { user } = use(AuthContext);
      const [models, setModels] = useState([]);
      const [loading, setLoading] = useState(true);

      
        useEffect(() => {
          fetch(`http://localhost:3000/my-downloads?email=${user.email}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setModels(data);
              setLoading(false);
            });
        }, [user]);

     if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 m-10">
        {models.map((model) => (
          <ModelCard key={model.id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default MyDownloads;