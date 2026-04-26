import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope } from 'lucide-react';
import { TEAL, TEAL_LT, BG, WHITE, NAVY, MUTED } from '../brand';

const doctors = [
    { name: 'Др. ............', role: 'Главный врач, Стоматолог-ортопед', exp: '20+ лет', specs: ['All-on-4/6', 'Цифровое протезирование', 'Реабилитация'] },
    { name: 'Др. ............', role: 'Хирург-имплантолог', exp: '15+ лет', specs: ['Костная пластика', 'Синус-лифтинг', 'Зубы мудрости'] },
    { name: 'Др. ............', role: 'Стоматолог-терапевт', exp: '12+ лет', specs: ['Микроскоп', 'E.max реставрации'] },
    { name: 'Др. ............', role: 'Ортодонт, Гигиенист', exp: '10+ лет', specs: ['Invisalign', 'ZOOM 4', 'Air-Flow'] },
];

const Doctors = () => (
    <section id="doctors" style={{ background: WHITE, padding: '5rem 0' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ display: 'inline-block', background: `${TEAL}15`, color: TEAL, fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '0.75rem' }}>Наша команда</span>
                <h2 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.8rem,5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Специалисты клиники</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.5rem' }}>
                {doctors.map((d, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        style={{
                            background: BG, borderRadius: '1.5rem', padding: '2rem',
                            border: `1px solid ${TEAL}12`, display: 'flex', flexDirection: 'column', gap: '1rem',
                            transition: 'box-shadow 0.3s, transform 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 10px 36px ${TEAL}12`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>

                        <div style={{ width: 60, height: 60, borderRadius: 16, background: `linear-gradient(135deg, ${TEAL}, ${TEAL_LT})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Stethoscope size={28} style={{ color: WHITE }} />
                        </div>

                        <div>
                            <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: TEAL_LT, marginBottom: '0.2rem' }}>Опыт: {d.exp}</p>
                            <h3 style={{ fontWeight: 900, fontSize: '1rem', color: NAVY, marginBottom: '0.15rem' }}>{d.name}</h3>
                            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: MUTED }}>{d.role}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {d.specs.map((s, j) => (
                                <span key={j} style={{ fontSize: '0.75rem', fontWeight: 700, color: NAVY, background: `${TEAL}0a`, padding: '0.3rem 0.75rem', borderRadius: 999, width: 'fit-content' }}>{s}</span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingTop: '0.6rem', borderTop: `1px solid ${TEAL}10`, marginTop: 'auto' }}>
                            <GraduationCap size={14} style={{ color: TEAL }} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: MUTED }}>Международный сертификат</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Doctors;
