import React, { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>tes</h1>
    </div>
  );
};

export default Loading;
