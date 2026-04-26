import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import PriceList from '../components/PriceList';
import Doctors from '../components/Doctors';
import SEOArticles from '../components/SEOArticles';
import GoogleMap from '../components/Map';
import { TEAL, TEAL_LT, MINT, WHITE, NAVY } from '../brand';

const TrustBar = () => (
    <div style={{ background: TEAL }}>
        <div className="container" style={{ padding: '3rem 2rem' }}>
            <div className="trust-grid">
                {[
                    { val: '2000+', label: 'Довольных пациентов' },
                    { val: '15+', label: 'Опытных врачей' },
                    { val: '24/7', label: 'Онлайн запись' },
                    { val: '100%', label: 'Гарантия лечения' },
                ].map((s, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 900, color: MINT, lineHeight: 1, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{s.val}</div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

const CtaBanner = ({ onBookClick }) => (
    <section style={{ background: '#0F2E2B', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-6rem', left: '-6rem', width: '28rem', height: '28rem', borderRadius: '50%', background: `radial-gradient(circle, ${TEAL}20, transparent 70%)` }} />
            <div style={{ position: 'absolute', bottom: '-8rem', right: '-5rem', width: '36rem', height: '36rem', borderRadius: '50%', background: `radial-gradient(circle, ${TEAL_LT}10, transparent 70%)` }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span style={{ display: 'inline-block', background: `${TEAL_LT}20`, color: TEAL_LT, fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '1.5rem' }}>
                    Бесплатно для новых пациентов
                </span>
                <h2 style={{ fontWeight: 900, color: WHITE, lineHeight: 1, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 6vw, 4.5rem)', marginBottom: '1.25rem' }}>
                    Готовы к <span style={{ color: MINT }}>идеальной</span> улыбке?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem,2vw,1.1rem)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 2.5rem' }}>
                    Запишитесь на <span style={{ color: WHITE, fontWeight: 800 }}>бесплатную консультацию</span> и получите персональный план лечения.
                </p>
                <button onClick={onBookClick} style={{
                    background: MINT, color: NAVY, fontWeight: 900, fontSize: 'clamp(0.95rem,2vw,1.15rem)',
                    padding: '1.1rem 3rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                    boxShadow: `0 12px 40px ${MINT}40`, transition: 'transform 0.2s',
                }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                    Записаться сейчас
                </button>
            </motion.div>
        </div>
    </section>
);

const Home = ({ onBookClick }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ overflowX: 'hidden', paddingTop: 72 }}>
        <Hero onBookClick={onBookClick} />
        <TrustBar />
        <Benefits />
        <Services onBookClick={onBookClick} />
        <PriceList onBookClick={onBookClick} />
        <Doctors />
        <SEOArticles />
        <GoogleMap />
        <CtaBanner onBookClick={onBookClick} />
    </motion.div>
);

export default Home;
