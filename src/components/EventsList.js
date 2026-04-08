import EventCard from "./EventCard";

async function getEvents() {
  try {
    const response = await fetch("http://localhost:3001/events", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Falha ao buscar eventos");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
}

export default async function EventsList() {
  const events = await getEvents();

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          Nenhum evento encontrado. Certifique-se de que o json-server está
          rodando.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Execute:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            pnpm run json-server
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Próximos Eventos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
