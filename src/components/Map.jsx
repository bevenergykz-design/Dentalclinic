import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { TEAL, WHITE, NAVY } from '../brand';

const MAPS_LINK = 'https://maps.google.com/?q=Алматы+ул.+Кожабекова+19';

const GoogleMap = () => {
    return (
        <section id="map" style={{ position: 'relative', height: 480, width: '100%', overflow: 'hidden' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.1174!2d76.899!3d43.208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ec!2z0YPQu9C40YbQsCDQmtC-0LbQsNCx0LXQutC-0LLQsCAxOSwg0JDQu9C80LDRgtGLIDA1MDAwMA!5e0!3m2!1sru!2skz!4v1700000000000!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Dental Company — местоположение клиники"
            />

            {/* Info Card Overlay */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(16px)',
                borderRadius: '1.5rem',
                padding: '1.75rem',
                maxWidth: 300,
                boxShadow: '0 16px 48px rgba(27,107,104,0.18)',
                border: '1px solid rgba(27,107,104,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}>
                <h4 style={{ fontWeight: 900, color: NAVY, fontSize: '1.05rem', margin: 0 }}>Ждём вас в гостях</h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                        { icon: MapPin, text: 'Алматы, ул. Кожабекова, 19' },
                        { icon: Phone, text: '+7 (707) 998-61-61' },
                        { icon: Clock, text: 'Пн–Сб: 09:00–20:00' },
                    ].map(({ icon: Ic, text }, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span style={{
                                width: 32, height: 32, borderRadius: 8,
                                background: `${TEAL}12`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                                <Ic size={14} style={{ color: TEAL }} />
                            </span>
                            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: NAVY }}>{text}</span>
                        </div>
                    ))}
                </div>

                <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                        background: TEAL, color: WHITE, fontWeight: 800, fontSize: '0.82rem',
                        padding: '0.7rem 1.25rem', borderRadius: 999, textDecoration: 'none',
                        boxShadow: `0 6px 20px rgba(27,107,104,0.25)`,
                    }}
                >
                    <Navigation size={14} /> Построить маршрут
                </a>
            </div>
        </section>
    );
};

export default GoogleMap;
