import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Activity, ShieldCheck, Sparkles, Scissors, AlignCenter, CheckCircle } from 'lucide-react';
import { TEAL, TEAL_LT, BG, WHITE, NAVY, MUTED } from '../brand';

const list = [
    { id: 'implantation', icon: ShieldCheck, title: 'Имплантация', desc: 'Пожизненное решение для отсутствующих зубов. All-on-4 и All-on-6 для полной реабилитации.', features: ['Straumann & Osstem', 'All-on-4 / All-on-6', 'Одномоментная имплантация', 'Цифровой шаблон'] },
    { id: 'prosthetics', icon: Activity, title: 'Протезирование', desc: 'Восстановление зубного ряда коронками и винирами из циркония и E.max.', features: ['Циркониевые коронки', 'Керамика E.max', 'Виниры и люминиры', 'Съемные протезы'] },
    { id: 'therapy', icon: Microscope, title: 'Лечение под микроскопом', desc: 'Ювелирная точность в эндодонтии. Спасаем зубы, от которых отказались.', features: ['Каналы любой сложности', 'Реставрация', 'Лечение пульпита', 'Удаление обломков'] },
    { id: 'hygiene', icon: Sparkles, title: 'Гигиена и отбеливание', desc: 'Air-Flow и отбеливание ZOOM 4 для сияющей улыбки.', features: ['Air-Flow чистка', 'Уз гигиена', 'ZOOM 4', 'Фторирование'] },
    { id: 'surgery', icon: Scissors, title: 'Хирургия', desc: 'Безболезненное удаление, синус-лифтинг, костная пластика.', features: ['Зубы мудрости', 'Синус-лифтинг', 'Костная регенерация', 'Пластика десны'] },
    { id: 'orthodontics', icon: AlignCenter, title: 'Ортодонтия', desc: 'Исправление прикуса в любом возрасте — элайнеры или брекеты.', features: ['Invisalign', 'Керамические брекеты', 'Металлические брекеты', 'Детская ортодонтия'] },
];

const Services = ({ onBookClick }) => {
    const [active, setActive] = useState('implantation');
    const cur = list.find(s => s.id === active);

    return (
        <section id="services" style={{ background: WHITE, padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', background: `${TEAL}15`, color: TEAL, fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '0.75rem' }}>Наши компетенции</span>
                    <h2 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.8rem,5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Направления лечения</h2>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {list.map(s => {
                        const Icon = s.icon; const isA = s.id === active;
                        return (
                            <button key={s.id} onClick={() => setActive(s.id)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.6rem 1.2rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                                    fontWeight: 700, fontSize: '0.8rem', fontFamily: 'inherit',
                                    background: isA ? TEAL : BG, color: isA ? WHITE : NAVY,
                                    boxShadow: isA ? `0 4px 16px ${TEAL}30` : 'none',
                                    transition: 'all 0.25s',
                                }}>
                                <Icon size={15} /> {s.title}
                            </button>
                        );
                    })}
                </div>

                {/* Panel */}
                <div style={{ background: BG, borderRadius: '1.5rem', padding: 'clamp(1.5rem,4vw,2.5rem)', border: `1px solid ${TEAL}12` }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}>
                            <h3 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.4rem,3vw,2rem)', marginBottom: '0.75rem' }}>{cur.title}</h3>
                            <p style={{ color: MUTED, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 580 }}>{cur.desc}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem', marginBottom: '2rem' }}>
                                {cur.features.map((f, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: WHITE, padding: '0.75rem 1rem', borderRadius: '0.75rem', border: `1px solid ${TEAL}0a` }}>
                                        <CheckCircle size={15} style={{ color: TEAL, flexShrink: 0 }} />
                                        <span style={{ fontWeight: 600, fontSize: '0.85rem', color: NAVY }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={onBookClick} style={{
                                background: TEAL, color: WHITE, fontWeight: 800, fontSize: '0.9rem',
                                padding: '0.85rem 2rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                                boxShadow: `0 6px 24px ${TEAL}25`, transition: 'transform 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                                Записаться на консультацию
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Services;
