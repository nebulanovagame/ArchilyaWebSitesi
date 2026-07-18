import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const BUDGET_OPTIONS = [
  '100.000 TL - 250.000 TL',
  '250.000 TL - 500.000 TL',
  '500.000 TL - 1.000.000 TL',
  '1.000.000 TL+',
  'Belirtmek istemiyorum',
];

export default function FranchiseForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    budgetRange: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function update(field, value) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.city || !form.phone || !form.email) return;

    setSending(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || 'https://backend.archilya.com'}/call/submitFranchiseApplication`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      toast.success('Başvurunuz alındı! En kısa sürede size dönüş yapacağız.');
    } catch {
      toast.error('Başvuru gönderilemedi. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-serif text-white italic mb-3">Başvurunuz Alındı</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Ekibimiz başvurunuzu değerlendirecek ve en kısa sürede size dönüş yapacaktır.
          Teşekkür ederiz.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Adınız Soyadınız *</label>
          <input value={form.name} onChange={(e) => update('name', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Firma Adı</label>
          <input value={form.company} onChange={(e) => update('company', e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Şehir *</label>
          <input value={form.city} onChange={(e) => update('city', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Telefon *</label>
          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">E-posta *</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Yatırım Bütçesi</label>
          <select value={form.budgetRange} onChange={(e) => update('budgetRange', e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-[#1a1c23] px-3 py-2.5 text-sm text-gray-300 focus:border-primary/40 focus:outline-none">
            <option value="" className="bg-[#1a1c23] text-gray-500">Seçiniz</option>
            {BUDGET_OPTIONS.map((o) => <option key={o} value={o} className="bg-[#1a1c23] text-gray-300">{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Mesajınız</label>
        <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={4}
          className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none"
          placeholder="Eklemek istedikleriniz..." />
      </div>

      <button type="submit" disabled={sending}
        className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all disabled:opacity-50">
        <Send className="w-4 h-4" />
        {sending ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
      </button>
    </form>
  );
}
