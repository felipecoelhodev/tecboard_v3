import EventsList from "../components/EventsList";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TecBoard_v3</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Plataforma de eventos de tecnologia
          </p>
        </div>

        <EventsList />

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Sobre esta aplicação
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Server Component:</strong> EventsList - busca dados do
                json-server
              </p>
              <p>
                <strong>Client Component:</strong> EventCard - interatividade
                com botão de curtir
              </p>
              <p className="text-sm mt-4">
                Para rodar o json-server:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pnpm run json-server
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
