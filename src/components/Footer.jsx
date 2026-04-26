import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import { TEAL_LT, WHITE } from '../brand';

const FBG = '#0F2E2B';
const WA = 'https://wa.me/77079986161';

const navLinks = ['О клинике|#about', 'Услуги|#services', 'Цены|#prices', 'Врачи|#doctors', 'Статьи|#blog'].map(s => { const [l, h] = s.split('|'); return { label: l, href: h }; });
const serviceLinks = ['Имплантация', 'Протезирование', 'Лечение под микроскопом', 'Гигиена и отбеливание', 'Ортодонтия'].map(l => ({ label: l, href: '#services' }));

const Footer = () => (
    <footer id="contact" style={{ background: FBG, color: WHITE }}>
        <div className="container footer-container">
            <div className="footer-grid">

                {/* Brand */}
                <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img
                            src={logo}
                            alt="My Dental Company"
                            style={{
                                height: 56,
                                objectFit: 'contain',
                                mixBlendMode: 'screen',
                            }}
                        />
                    </div>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
                        Центр имплантации и протезирования в Алматы с международными стандартами качества.
                    </p>
                    <a href={WA} target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: '#25D366', color: WHITE, fontWeight: 800, fontSize: '0.82rem',
                        padding: '0.65rem 1.2rem', borderRadius: 999, textDecoration: 'none', width: 'fit-content',
                    }}>
                        <MessageCircle size={16} /> Написать в WhatsApp
                    </a>
                </div>

                {/* Nav */}
                <div>
                    <h4 style={{ fontWeight: 800, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: TEAL_LT, marginBottom: '1.25rem' }}>Навигация</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: 0 }}>
                        {navLinks.map(l => (
                            <li key={l.label}><a href={l.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = TEAL_LT; }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                                <span style={{ width: 4, height: 4, borderRadius: '50%', background: TEAL_LT, flexShrink: 0 }} />{l.label}
                            </a></li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 style={{ fontWeight: 800, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: TEAL_LT, marginBottom: '1.25rem' }}>Услуги</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: 0 }}>
                        {serviceLinks.map(l => (
                            <li key={l.label}><a href={l.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = TEAL_LT; }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                                <span style={{ width: 4, height: 4, borderRadius: '50%', background: TEAL_LT, flexShrink: 0 }} />{l.label}
                            </a></li>
                        ))}
                    </ul>
                </div>

                {/* Contacts */}
                <div className="footer-contacts">
                    <h4 style={{ fontWeight: 800, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: TEAL_LT, marginBottom: '1.25rem' }}>Контакты</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {[
                            { icon: Phone, label: 'WhatsApp', val: '+7 (707) 998-61-61', href: WA },
                            { icon: MapPin, label: 'Адрес', val: 'Алматы, ул. Кожабекова, 19' },
                            { icon: Clock, label: 'Режим работы', val: 'Пн–Сб: 09:00–20:00', sub: 'Вс — выходной' },
                        ].map(({ icon: Ic, label, val, href, sub }, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Ic size={16} style={{ color: TEAL_LT }} />
                                </span>
                                <div>
                                    <p style={{ fontSize: '0.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.15rem' }}>{label}</p>
                                    {href ? <a href={href} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: WHITE, fontSize: '0.85rem', textDecoration: 'none' }}>{val}</a> : <p style={{ fontWeight: 700, color: WHITE, fontSize: '0.85rem', margin: 0 }}>{val}</p>}
                                    {sub && <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.1rem' }}>{sub}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', paddingTop: '1.75rem' }}>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>© 2026 My Dental Company. Все права защищены.</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {['Политика конфиденциальности', 'Публичная оферта'].map(t => (
                        <a key={t} href="#" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.color = TEAL_LT; }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; }}>{t}</a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
