import { useState } from 'react';

interface Unit {
  id: string;
  name: string;
}

interface Props {
  lang: 'es' | 'en';
  units: Unit[];
  labels: {
    name: string;
    email: string;
    message: string;
    unit: string;
    selectUnit: string;
    general: string;
    send: string;
    success: string;
    error: string;
  };
}

export default function ContactForm({ lang, units, labels }: Props) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const unit = data.get('unit') as string;
    const message = data.get('message') as string;

    const subject = encodeURIComponent(`[${unit}] Consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nUnidad: ${unit}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:info@shemayisraelsrl.com?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2c5f8a] focus:border-transparent outline-none transition-all text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2c5f8a] focus:border-transparent outline-none transition-all text-sm"
        />
      </div>

      <div>
        <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.unit}
        </label>
        <select
          id="unit"
          name="unit"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2c5f8a] focus:border-transparent outline-none transition-all text-sm bg-white"
        >
          <option value="general">{labels.general}</option>
          {units.map((unit) => (
            <option key={unit.id} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2c5f8a] focus:border-transparent outline-none transition-all text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1a3a5c] hover:bg-[#2c5f8a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
      >
        {labels.send}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm font-medium">{labels.success}</p>
      )}
    </form>
  );
}
