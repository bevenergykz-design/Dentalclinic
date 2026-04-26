import { useState } from 'react';
import { ChevronDown, CircleDollarSign, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAL, BG, WHITE, NAVY, MUTED } from '../brand';

const cats = [
    {
        id: 'imp', title: 'Имплантация', items: [
            { name: 'Имплант Osstem (Ю. Корея)', price: 'от 120 000 ₸', offer: 'Акция' },
            { name: 'Имплант Straumann (Швейцария)', price: 'от 280 000 ₸' },
            { name: 'Синус-лифтинг открытый', price: 'от 150 000 ₸' },
            { name: 'All-on-4 «под ключ»', price: 'от 1 200 000 ₸' },
        ]
    },
    {
        id: 'pro', title: 'Протезирование', items: [
            { name: 'Коронка из диоксида циркония', price: 'от 65 000 ₸' },
            { name: 'Керамическая коронка E-max', price: 'от 85 000 ₸' },
            { name: 'Керамический винир', price: 'от 95 000 ₸' },
            { name: 'Съемный нейлоновый протез', price: 'от 120 000 ₸' },
        ]
    },
    {
        id: 'ther', title: 'Терапия и гигиена', items: [
            { name: 'Лечение кариеса с анестезией', price: 'от 15 000 ₸' },
            { name: 'Лечение каналов под микроскопом', price: 'от 35 000 ₸' },
            { name: 'Профгигиена Air-Flow + УЗ', price: '25 000 ₸' },
            { name: 'Отбеливание ZOOM 4', price: 'от 120 000 ₸' },
        ]
    },
];

const PriceList = ({ onBookClick }) => {
    const [openIds, setOpenIds] = useState(['imp']);

    return (
        <section id="prices" style={{ background: BG, padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', background: `${TEAL}15`, color: TEAL, fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '0.75rem' }}>Прозрачные цены</span>
                    <h2 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.8rem,5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Стоимость услуг</h2>
                    <p style={{ color: MUTED, maxWidth: 480, margin: '0.75rem auto 0', fontSize: '0.95rem' }}>Фиксированный план лечения до начала работ. Без сюрпризов.</p>
                </div>

                <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cats.map(c => {
                        const isOpen = openIds.includes(c.id);
                        return (
                            <div key={c.id} style={{
                                background: WHITE, borderRadius: '1.25rem', overflow: 'hidden',
                                border: `1px solid ${isOpen ? TEAL : TEAL + '15'}`,
                                boxShadow: isOpen ? `0 6px 30px ${TEAL}10` : `0 1px 8px ${TEAL}06`,
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                            }}>
                                <button onClick={() => setOpenIds(prev => prev.includes(c.id) ? prev.filter(id => id !== c.id) : [...prev, c.id])} style={{
                                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '1.25rem 1.5rem', background: isOpen ? `${TEAL}06` : 'transparent',
                                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{
                                            width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: isOpen ? TEAL : `${TEAL}12`, flexShrink: 0,
                                        }}>
                                            <CircleDollarSign size={20} style={{ color: isOpen ? WHITE : TEAL }} />
                                        </span>
                                        <span style={{ fontWeight: 800, fontSize: '1.05rem', color: NAVY }}>{c.title}</span>
                                    </div>
                                    <span style={{ transform: isOpen ? 'rotate(180deg)' : '', transition: 'transform 0.3s' }}>
                                        <ChevronDown size={22} style={{ color: TEAL }} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0 1.5rem 1.25rem' }}>
                                                {c.items.map((it, idx) => (
                                                    <div key={idx} style={{
                                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                        padding: '0.9rem 0', gap: '1rem',
                                                        borderBottom: idx < c.items.length - 1 ? `1px solid ${TEAL}0a` : 'none',
                                                    }}>
                                                        <div style={{ flex: 1 }}>
                                                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: NAVY }}>{it.name}</span>
                                                            {it.offer && <span style={{ display: 'inline-block', fontSize: '0.58rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', background: '#e74c3c', color: WHITE, padding: '0.15rem 0.6rem', borderRadius: 999, marginLeft: '0.5rem' }}>{it.offer}</span>}
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                                                            <span style={{ fontWeight: 900, fontSize: '0.95rem', color: NAVY }}>{it.price}</span>
                                                            <button onClick={onBookClick} className="price-book-btn"
                                                                style={{ alignItems: 'center', gap: '0.3rem', background: TEAL, color: WHITE, fontWeight: 700, fontSize: '0.72rem', padding: '0.35rem 0.9rem', borderRadius: 999, border: 'none', cursor: 'pointer' }}>
                                                                <CalendarCheck size={12} /> Записаться
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
                <p style={{ textAlign: 'center', color: MUTED, fontSize: '0.75rem', marginTop: '2rem', opacity: 0.6 }}>* Окончательная стоимость определяется после консультации. Цены в тенге (₸).</p>
            </div>
        </section>
    );
};

export default PriceList;
