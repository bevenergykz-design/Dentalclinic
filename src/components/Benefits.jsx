import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse, Shield, UserCheck, Star } from 'lucide-react';
import { TEAL, TEAL_LT, BG, NAVY, MUTED } from '../brand';

const items = [
    { icon: Award, title: '20+ лет опыта', desc: 'Основатель и ведущие врачи практикуют более 20 лет в имплантации и протезировании.' },
    { icon: Zap, title: 'Цифровой протокол', desc: '3D-сканирование, КТ-диагностика и CAD/CAM фрезерование коронок — всё в клинике.' },
    { icon: HeartPulse, title: 'Без боли', desc: 'Современная анестезия и седация. Полный комфорт на каждом этапе лечения.' },
    { icon: Shield, title: 'Гарантия на работы', desc: 'Официальная письменная гарантия на имплантаты и протезирование.' },
    { icon: UserCheck, title: 'Фиксированная цена', desc: 'Полный план со стоимостью до начала — никаких скрытых доплат.' },
    { icon: Star, title: 'Топ-имплантаты', desc: 'Только Straumann (Швейцария), Osstem (Корея), Nobel Biocare.' },
];

const Benefits = () => (
    <section id="about" style={{ background: BG, padding: '5rem 0' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ display: 'inline-block', background: `${TEAL}15`, color: TEAL, fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '0.75rem' }}>
                    Мировые стандарты
                </span>
                <h2 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.8rem,5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    Почему выбирают нас?
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {items.map((b, i) => {
                    const Icon = b.icon;
                    return (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                            style={{
                                background: '#fff', padding: '2rem', borderRadius: '1.5rem',
                                border: `1px solid ${TEAL}15`, boxShadow: `0 2px 12px ${TEAL}08`,
                                transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'default',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${TEAL}14`; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 2px 12px ${TEAL}08`; }}>
                            <div style={{ width: 52, height: 52, borderRadius: 14, background: `${TEAL}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                                <Icon size={24} style={{ color: TEAL }} />
                            </div>
                            <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: NAVY, marginBottom: '0.5rem' }}>{b.title}</h3>
                            <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: MUTED }}>{b.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Benefits;
