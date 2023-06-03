import React from "react";

const EditPoems = () => {
  const [result, setResult] = useState([]);

  (async () => {
    await fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setResult(data.result));
  })();

  const Edit = async (id, title) => {
    const newTitle = prompt("Write new title name:", title);
    await fetch(URL, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify({ id: id, title: newTitle }),
    });
  };
  const Delete = async (id) => {
    await fetch(URL, {
      method: "DELETE",
      headers: HEADERS,
      body: JSON.stringify({ id: id }),
    });
  };

  return (
    <div>
      {result.map(({ _id, title, poem }) => (
        <div key={_id}>
          <div>TITLE: {title}</div>
          <div>POEM: {poem}</div>
          <button onClick={() => Edit(_id, title)}>edit</button>
          <button onClick={() => Delete(_id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default EditPoems;
