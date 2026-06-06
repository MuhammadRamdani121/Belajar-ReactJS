function Html() {
  return (
    <div>
      <h1 className="text-4xl font-bold">HTML Tutorial</h1>

      <p className="mt-4">HTML adalah dasar dari semua website.</p>

      <div className="bg-gray-100 p-4 mt-6 rounded">
        <pre>
          {`<h1>Hello World</h1>
<p>Belajar HTML</p>`}
        </pre>
      </div>
    </div>
  );
}

export default Html;
