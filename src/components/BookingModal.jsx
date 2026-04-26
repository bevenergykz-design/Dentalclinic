import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Stethoscope } from 'lucide-react';
import { TEAL, TEAL_LT, BG, WHITE, NAVY, MUTED } from '../brand';

const SVCS = [
    'Имплантация зубов', 'Протезирование (коронки, виниры)', 'Лечение каналов под микроскопом',
    'Профессиональная гигиена', 'Отбеливание ZOOM 4', 'Ортодонтия (брекеты / элайнеры)',
    'Удаление зуба', 'Другое / Консультация',
];

const BookingModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({ name: '', phone: '', service: SVCS[0] });
    const [sent, setSent] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const submit = e => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => { setSent(false); onClose(); setForm({ name: '', phone: '', service: SVCS[0] }); }, 2500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(15,46,43,0.88)', backdropFilter: 'blur(10px)' }} />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 36 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 36 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                        style={{ position: 'relative', width: '100%', maxWidth: 480, background: WHITE, borderRadius: '2rem', boxShadow: '0 32px 80px rgba(0,0,0,0.3)', overflow: 'hidden' }}>

                        <div style={{ background: TEAL, padding: '2rem 2rem 1.75rem', textAlign: 'center', position: 'relative' }}>
                            <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', lineHeight: 0 }}><X size={26} /></button>
                            <p style={{ fontSize: '0.62rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', color: TEAL_LT, marginBottom: '0.4rem' }}>Бесплатная консультация</p>
                            <h2 style={{ fontWeight: 900, fontSize: '1.6rem', color: WHITE }}>Запись на приём</h2>
                        </div>

                        {!sent ? (
                            <form onSubmit={submit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { key: 'name', icon: User, label: 'Ваше имя *', type: 'text', placeholder: 'Например: Арман' },
                                    { key: 'phone', icon: Phone, label: 'Телефон *', type: 'tel', placeholder: '+7 (___) ___-__-__' },
                                ].map(({ key, icon: Ic, label, type, placeholder }) => (
                                    <div key={key}>
                                        <label style={{ fontSize: '0.62rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: MUTED, display: 'block', marginBottom: '0.35rem' }}>{label}</label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: BG, padding: '0.75rem 1rem', borderRadius: '0.75rem', border: `1.5px solid ${TEAL}15` }}>
                                            <Ic size={16} style={{ color: TEAL, flexShrink: 0 }} />
                                            <input type={type} required placeholder={placeholder} value={form[key]}
                                                onChange={e => setForm({ ...form, [key]: e.target.value })}
                                                style={{ background: 'transparent', border: 'none', outline: 'none', flex: 1, fontWeight: 600, fontSize: '0.88rem', color: NAVY, fontFamily: 'inherit' }} />
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <label style={{ fontSize: '0.62rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: MUTED, display: 'block', marginBottom: '0.35rem' }}>Выберите услугу</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: BG, padding: '0.75rem 1rem', borderRadius: '0.75rem', border: `1.5px solid ${TEAL}15` }}>
                                        <Stethoscope size={16} style={{ color: TEAL, flexShrink: 0 }} />
                                        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                                            style={{ background: 'transparent', border: 'none', outline: 'none', flex: 1, fontWeight: 600, fontSize: '0.88rem', color: NAVY, fontFamily: 'inherit', appearance: 'none', cursor: 'pointer' }}>
                                            {SVCS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    background: TEAL, color: WHITE, fontWeight: 800, fontSize: '1rem',
                                    padding: '1rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                                    marginTop: '0.25rem', boxShadow: `0 6px 24px ${TEAL}30`, transition: 'transform 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                                    <Send size={17} /> Перезвонить мне
                                </button>
                                <p style={{ textAlign: 'center', fontSize: '0.65rem', color: `${MUTED}88` }}>Нажимая кнопку, вы принимаете политику конфиденциальности</p>
                            </form>
                        ) : (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                style={{ padding: '3.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: 60, height: 60, borderRadius: '50%', background: `${TEAL}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: TEAL }}>✓</div>
                                <h3 style={{ fontWeight: 900, fontSize: '1.35rem', color: NAVY }}>Заявка принята!</h3>
                                <p style={{ color: MUTED, fontSize: '0.88rem' }}>Мы свяжемся с вами по номеру <strong style={{ color: NAVY }}>{form.phone}</strong></p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
