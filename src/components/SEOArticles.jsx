import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Clock, ArrowRight } from 'lucide-react';
import { TEAL, TEAL_LT, BG, WHITE, NAVY, MUTED } from '../brand';

const articles = [
    {
        id: 'allon4',
        tag: 'Имплантация',
        date: '15 марта 2026',
        readTime: '7 мин',
        title: 'All-on-4: полное восстановление зубного ряда за один день',
        excerpt: 'Технология All-on-4 позволяет восстановить все зубы на одной челюсти всего на 4 имплантатах. Пациент получает временный несъемный протез в день операции.',
        content: `<h3>Что такое All-on-4?</h3>
<p>All-on-4 — это методика полной реабилитации беззубой челюсти, разработанная компанией Nobel Biocare. Вместо установки отдельного имплантата под каждый зуб, хирург устанавливает всего 4 стратегически расположенных имплантата, на которые в тот же день фиксируется полный несъемный протез.</p>

<h3>Кому подходит?</h3>
<ul>
<li>Пациентам с полной или почти полной потерей зубов</li>
<li>Тем, кто устал от съемных протезов</li>
<li>Пациентам с атрофией кости — в большинстве случаев костная пластика не требуется</li>
<li>Людям, которые хотят быстрый результат (протез в день операции)</li>
</ul>

<h3>Этапы лечения</h3>
<p><strong>1. Диагностика</strong> — КТ-снимок, 3D-моделирование, планирование расположения имплантатов с помощью хирургического шаблона.</p>
<p><strong>2. Операция</strong> (1.5–3 часа) — установка 4 имплантатов под местной анестезией или седацией. Два передних ставятся вертикально, два задних — под углом 30–45° для максимальной опоры.</p>
<p><strong>3. Временный протез</strong> — в тот же день изготавливается и фиксируется акриловый протез с 10–12 зубами.</p>
<p><strong>4. Постоянный протез</strong> — через 3–6 месяцев, после полной остеоинтеграции имплантатов, устанавливается постоянный циркониевый или металлокерамический протез.</p>

<h3>Преимущества</h3>
<ul>
<li>Зубы за один день — уходите из клиники с новой улыбкой</li>
<li>Не нужна костная пластика в 95% случаев</li>
<li>Стоимость значительно ниже установки 8–10 отдельных имплантатов</li>
<li>Срок службы — от 15 лет при правильном уходе</li>
</ul>

<h3>Стоимость All-on-4 в Алматы</h3>
<p>В нашей клинике стоимость All-on-4 «под ключ» начинается от 1 200 000 ₸. В цену входит: диагностика, хирургический шаблон, 4 имплантата, операция, анестезия и временный протез.</p>`,
    },
    {
        id: 'zirconia',
        tag: 'Протезирование',
        date: '28 февраля 2026',
        readTime: '5 мин',
        title: 'Циркониевые коронки vs металлокерамика: подробное сравнение',
        excerpt: 'Сравниваем два самых популярных материала для зубных коронок. Почему цирконий стал золотым стандартом в современной стоматологии.',
        content: `<h3>Что такое циркониевая коронка?</h3>
<p>Коронка из диоксида циркония — это цельноциркониевая или облицованная фарфором реставрация, изготовленная на CAD/CAM оборудовании (фрезерном станке) из блока высокопрочного циркония. Материал имеет прочность на изгиб 900–1200 МПа — прочнее натуральной эмали.</p>

<h3>Преимущества циркония</h3>
<ul>
<li><strong>Биосовместимость</strong> — не вызывает аллергию, не окисляется, не выделяет ионы металла</li>
<li><strong>Эстетика</strong> — прозрачность и цвет максимально приближены к натуральному зубу</li>
<li><strong>Отсутствие серой каймы</strong> — в отличие от металлокерамики, десна не темнеет на границе с коронкой</li>
<li><strong>Прочность</strong> — подходит для жевательных зубов и мостовидных конструкций</li>
<li><strong>Точность прилегания</strong> — CAD/CAM обеспечивает зазор менее 30 микрон</li>
</ul>

<h3>Когда выбрать металлокерамику?</h3>
<p>Металлокерамика остается рабочим вариантом при ограниченном бюджете. Однако имеет ряд недостатков: серая линия у десны через 2–3 года, риск аллергии на металл (никель, кобальт), сколы керамической облицовки.</p>

<h3>Стоимость в нашей клинике</h3>
<p>Циркониевая коронка — от 65 000 ₸. Керамика E.max (для передних зубов) — от 85 000 ₸. Металлокерамика — от 35 000 ₸. Консультация ортопеда — бесплатно.</p>`,
    },
    {
        id: 'microscope',
        tag: 'Эндодонтия',
        date: '10 января 2026',
        readTime: '6 мин',
        title: 'Лечение каналов под микроскопом: зачем это нужно и что это даёт',
        excerpt: 'Стоматологический микроскоп увеличивает операционное поле в 25 раз. Это позволяет находить скрытые каналы и спасать зубы, которые другие клиники предлагали удалить.',
        content: `<h3>Почему микроскоп меняет всё?</h3>
<p>Стандартный корневой канал зуба имеет диаметр 0.3–0.5 мм. Человеческий глаз не способен увидеть детали такого размера. Микроскоп Carl Zeiss или Leica обеспечивает увеличение до 25x при идеальном освещении, позволяя врачу:</p>

<ul>
<li>Обнаружить дополнительные (скрытые) каналы — они есть в 30–40% случаев</li>
<li>Удалить обломки инструментов, оставленные при предыдущем лечении</li>
<li>Запломбировать каналы с точностью до 0.1 мм от апекса</li>
<li>Сохранить максимум здоровых тканей зуба</li>
</ul>

<h3>Какие зубы можно спасти?</h3>
<p><strong>Перелечивание каналов</strong> — если после лечения в другой клинике сохраняется боль или воспаление. Под микроскопом врач находит пропущенные каналы или негерметичную пломбировку.</p>
<p><strong>Перфорации</strong> — случайное повреждение стенки канала. Под микроскопом дефект закрывается биосовместимым материалом MTA.</p>
<p><strong>Обломки инструментов</strong> — тонкие эндодонтические файлы иногда ломаются в канале. Извлечение без микроскопа практически невозможно.</p>

<h3>Как проходит приём?</h3>
<p>1. Диагностика — прицельный снимок или КТ для оценки количества каналов и состояния тканей.</p>
<p>2. Изоляция зуба раббердамом — стерильное поле, защита от слюны.</p>
<p>3. Обработка каналов под микроскопом — очистка, дезинфекция раствором гипохлорита натрия.</p>
<p>4. Пломбировка — гуттаперча с горячей обтурацией для герметичного заполнения.</p>

<h3>Стоимость</h3>
<p>Лечение каналов под микроскопом — от 35 000 ₸ за один зуб. Перелечивание — от 45 000 ₸. Консультация эндодонтиста — бесплатно.</p>`,
    },
];

const SEOArticles = () => {
    const [openIds, setOpenIds] = useState([]);

    return (
        <section id="blog" style={{ background: BG, padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', background: `${TEAL}15`, color: TEAL, fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.1rem', borderRadius: 999, marginBottom: '0.75rem' }}>База знаний</span>
                    <h2 style={{ fontWeight: 900, color: NAVY, fontSize: 'clamp(1.8rem,5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Полезные статьи</h2>
                    <p style={{ color: MUTED, maxWidth: 480, margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
                        Подготовили подробные ответы на самые частые вопросы пациентов.
                    </p>
                </div>

                <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {articles.map(a => {
                        const isOpen = openIds.includes(a.id);
                        return (
                            <article key={a.id} itemScope itemType="https://schema.org/Article"
                                style={{
                                    background: WHITE, borderRadius: '1.5rem', overflow: 'hidden',
                                    border: `1px solid ${isOpen ? TEAL : TEAL + '15'}`,
                                    boxShadow: isOpen ? `0 8px 36px ${TEAL}10` : `0 1px 8px ${TEAL}06`,
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                }}>

                                {/* Header — always visible */}
                                <button
                                    onClick={() => setOpenIds(prev => prev.includes(a.id) ? prev.filter(id => id !== a.id) : [...prev, a.id])}
                                    style={{
                                        width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                                        padding: '1.5rem 1.75rem', background: isOpen ? `${TEAL}06` : 'transparent',
                                        border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.62rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', background: `${TEAL}14`, color: TEAL, padding: '0.2rem 0.65rem', borderRadius: 999 }}>
                                            {a.tag}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: MUTED, fontWeight: 600 }}>
                                            <Calendar size={12} /> {a.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: MUTED, fontWeight: 600 }}>
                                            <Clock size={12} /> {a.readTime}
                                        </span>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                                        <h3 itemProp="headline" style={{ fontWeight: 800, fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: NAVY, lineHeight: 1.35, margin: 0 }}>
                                            {a.title}
                                        </h3>
                                        <span style={{ transform: isOpen ? 'rotate(180deg)' : '', transition: 'transform 0.3s', flexShrink: 0 }}>
                                            <ChevronDown size={22} style={{ color: TEAL }} />
                                        </span>
                                    </div>

                                    <p itemProp="description" style={{ fontSize: '0.88rem', color: MUTED, lineHeight: 1.6, margin: 0 }}>
                                        {a.excerpt}
                                    </p>
                                </button>

                                {/* Expanded content */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div itemProp="articleBody"
                                                style={{ padding: '0 1.75rem 2rem', fontSize: '0.92rem', lineHeight: 1.8, color: NAVY }}
                                                dangerouslySetInnerHTML={{ __html: a.content }}
                                            />
                                            <style>{`
                        [itemprop="articleBody"] h3 {
                          font-weight: 800; font-size: 1.15rem; color: ${NAVY};
                          margin: 1.5rem 0 0.5rem;
                        }
                        [itemprop="articleBody"] ul {
                          padding-left: 1.25rem; margin: 0.5rem 0;
                        }
                        [itemprop="articleBody"] li {
                          margin-bottom: 0.4rem; color: ${MUTED};
                        }
                        [itemprop="articleBody"] p {
                          margin: 0.5rem 0; color: ${MUTED};
                        }
                        [itemprop="articleBody"] strong {
                          color: ${NAVY};
                        }
                      `}</style>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SEOArticles;
