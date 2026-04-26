import { motion } from 'framer-motion';
import { CalendarCheck, Phone, Star } from 'lucide-react';
import heroImg from '../assets/dental_hero.png';
import { TEAL, TEAL_LT, MINT, WHITE, NAVY } from '../brand';

const Hero = ({ onBookClick }) => (
    <section
        style={{
            position: 'relative',
            height: '80vh',
            minHeight: 520,
            maxHeight: 780,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
        }}
    >
        {/* Full background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
                src={heroImg}
                alt="Счастливая пациентка в стоматологической клинике"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% center' }}
            />
            {/* Dark gradient so text is always readable */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(20,51,47,0.92) 0%, rgba(20,51,47,0.75) 45%, rgba(20,51,47,0.3) 100%)' }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: 560 }}>
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Rating badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)', color: WHITE,
                        fontSize: '0.78rem', fontWeight: 700,
                        padding: '0.4rem 1rem', borderRadius: 999, marginBottom: '1.5rem',
                    }}>
                        <Star size={13} fill={MINT} color={MINT} />
                        <span style={{ color: MINT, fontWeight: 900 }}>4.9</span>
                        — более 2000 пациентов
                    </div>

                    <h1 style={{
                        fontWeight: 900, color: WHITE, lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                        marginBottom: '1.25rem',
                    }}>
                        Улыбка, которой <br />
                        вы будете <span style={{ color: MINT }}>гордиться</span>
                    </h1>

                    <p style={{
                        color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                        lineHeight: 1.7, marginBottom: '2rem', maxWidth: 460, fontWeight: 500,
                    }}>
                        Центр имплантации и протезирования в Алматы. Современные технологии, без боли, с гарантией.
                    </p>

                    {/* CTA */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                        <button
                            id="hero-book-btn"
                            onClick={onBookClick}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                background: WHITE, color: TEAL, fontWeight: 900, fontSize: '0.95rem',
                                padding: '0.9rem 2rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.2)', transition: 'transform 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                        >
                            <CalendarCheck size={18} /> Бесплатная консультация
                        </button>

                        <a href="https://wa.me/77079986161" target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                color: WHITE, fontWeight: 700, fontSize: '0.95rem',
                                padding: '0.9rem 2rem', borderRadius: 999,
                                border: '1.5px solid rgba(255,255,255,0.3)',
                                textDecoration: 'none', backdropFilter: 'blur(6px)',
                                transition: 'border-color 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                        >
                            <Phone size={16} /> +7 (707) 998-61-61
                        </a>
                    </div>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 0 }}>
                        {[['15+', 'лет опыта'], ['100%', 'гарантия'], ['24/7', 'онлайн-запись']].map(([v, l], i) => (
                            <div key={i} style={{
                                display: 'flex', flexDirection: 'column',
                                padding: '0 1.5rem',
                                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                                paddingLeft: i === 0 ? 0 : '1.5rem',
                            }}>
                                <span style={{ fontWeight: 900, fontSize: '1.4rem', color: MINT, lineHeight: 1 }}>{v}</span>
                                <span style={{ fontSize: '0.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{l}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Hero;
