import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { TEAL, BG, WHITE, NAVY, MUTED } from '../brand';

const WA = 'https://wa.me/77079986161';
const PH = '+7 (707) 998-61-61';

const NAV = [
    { label: 'О клинике', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Цены', href: '#prices' },
    { label: 'Врачи', href: '#doctors' },
    { label: 'Статьи', href: '#blog' },
    { label: 'Контакты', href: '#contact' },
];

const Header = ({ onBookClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const openMenu = () => { setOpen(true); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { setOpen(false); document.body.style.overflow = ''; };

    return (
        <>
            <header style={{
                position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
                height: 72,
                background: scrolled ? 'rgba(255,255,255,0.97)' : WHITE,
                boxShadow: scrolled ? `0 2px 20px rgba(27,107,104,0.1)` : `0 1px 0 rgba(27,107,104,0.08)`,
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'box-shadow 0.3s',
            }}>
                <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img src={logo} alt="My Dental Company" style={{ height: 40, objectFit: 'contain' }} />
                        <div className="hidden md:block" style={{ borderLeft: `1px solid rgba(27,107,104,0.12)`, paddingLeft: '0.6rem' }}>
                            <p style={{ fontWeight: 800, fontSize: '0.9rem', color: TEAL, lineHeight: 1.1 }}>My Dental Company</p>
                            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>Стоматологическая клиника</p>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <nav className="desktop-nav" style={{ alignItems: 'center', gap: '1.75rem' }}>
                        {NAV.map(l => (
                            <a key={l.href} href={l.href}
                                style={{ fontWeight: 700, fontSize: '0.82rem', color: NAVY, textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = TEAL; }}
                                onMouseLeave={e => { e.currentTarget.style.color = NAVY; }}>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop right */}
                    <div className="hidden md:flex" style={{ alignItems: 'center', gap: '1rem' }}>
                        <a href={WA} target="_blank" rel="noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, fontSize: '0.82rem', color: NAVY, textDecoration: 'none' }}>
                            <Phone size={14} style={{ color: TEAL }} /> {PH}
                        </a>
                        <button id="header-book-btn" onClick={onBookClick} style={{
                            background: TEAL, color: WHITE, fontWeight: 800, fontSize: '0.82rem',
                            padding: '0.55rem 1.3rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                            boxShadow: `0 4px 16px rgba(27,107,104,0.2)`, transition: 'transform 0.2s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                            Записаться
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button className="mobile-menu-btn" onClick={open ? closeMenu : openMenu}
                        style={{ padding: '0.4rem', color: TEAL, background: 'transparent', border: 'none', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}>
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile fullscreen menu */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 2000, background: WHITE,
                display: 'flex', flexDirection: 'column',
                transform: open ? 'translateX(0)' : 'translateX(100%)',
                opacity: open ? 1 : 0,
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s',
                pointerEvents: open ? 'all' : 'none', overflowY: 'auto',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: `1px solid rgba(27,107,104,0.1)` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img src={logo} alt="logo" style={{ height: 36 }} />
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: TEAL }}>My Dental</span>
                    </div>
                    <button onClick={closeMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEAL }}><X size={30} /></button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem', gap: 0, flexGrow: 1 }}>
                    {NAV.map((l, i) => (
                        <a key={l.href} href={l.href} onClick={closeMenu}
                            style={{
                                fontWeight: 800, color: NAVY, textDecoration: 'none',
                                fontSize: '1.4rem', padding: '0.9rem 0',
                                borderBottom: i < NAV.length - 1 ? `1px solid rgba(27,107,104,0.08)` : 'none',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = TEAL; }}
                            onMouseLeave={e => { e.currentTarget.style.color = NAVY; }}>
                            {l.label}
                        </a>
                    ))}
                </div>

                <div style={{ padding: '1.5rem 2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href={WA} target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1rem', color: NAVY, textDecoration: 'none' }}>
                        <span style={{ width: 44, height: 44, borderRadius: 12, background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Phone size={20} style={{ color: TEAL }} />
                        </span>
                        {PH}
                    </a>
                    <button id="mobile-book-btn" onClick={() => { closeMenu(); onBookClick(); }}
                        style={{
                            background: TEAL, color: WHITE, fontWeight: 800, fontSize: '1rem',
                            padding: '1rem 2rem', borderRadius: 999, border: 'none', cursor: 'pointer',
                            marginTop: '0.5rem', boxShadow: `0 8px 30px rgba(27,107,104,0.25)`,
                        }}>
                        Записаться на приём
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
