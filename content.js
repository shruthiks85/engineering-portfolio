window.portfolioContent = {
  siteTitle: 'Portfolio — Minimal',
  brand: 'Shruthi Sridhara',
  navLinks: [
    { label: 'How I work', href: '#how' },
    { label: 'Work', href: '#work' },
    { label: 'Principles', href: '#principles' },
    { label: 'Thinking', href: '#thinking' },
    { label: 'In their words', href: '#word' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    tag: 'Engineering Leadership · Netherlands · Open to work',
    title: 'I build teams that ship<br><strong>complex things reliably.</strong><br>Then I build <span class="mono">better_teams().</span>',
    description: '18 years in software — moving between hands-on architecture and team leadership depending on what the work needs. I stay technically close, build the structures that protect quality under pressure, and grow the engineers around me.',
    stats: [
      { value: '18<span>+</span>', label: 'years in software' },
      { value: '35', label: 'engineers led at peak' },
      { value: '7', label: 'promotions in 2 years' },
      { value: '30<span>%</span>', label: 'efficiency gain, $50M programme' }
    ]
  },
  sections: {
    how: {
      label: 'Operating model',
      title: 'How I work, not just what I\'ve done',
      items: [
        {
          number: '01',
          title: 'Player-coach, not passenger',
          description: 'I join architecture reviews, flag design risk early, and step in where delivery pressure threatens engineering quality. I don\'t manage from a distance and review at the end.',
          tag: 'technically close'
        },
        {
          number: '02',
          title: 'Forward-deployed by default',
          description: 'I work where the problem is — inside the customer\'s environment, on the shop floor, alongside the product team. Co-building from problem definition through to production, not handing over at the end.',
          tag: 'customer-embedded'
        },
        {
          number: '03',
          title: 'Structure before pressure',
          description: 'Delivery guardrails, escalation paths, incident response — I build these when things are calm. Teams shouldn\'t have to improvise when things aren\'t.',
          tag: 'operational excellence'
        },
        {
          number: '04',
          title: 'Regulated environments, real stakes',
          description: 'ATO authorisation, export classification controls, audit-ready documentation. High-consequence environments don\'t change the work — they sharpen it.',
          tag: 'compliance-ready'
        },
        /*{
          number: '05',
          title: 'AI-forward, responsible adoption',
          description: 'AI adoption practices that combine developer acceleration with human expertise, ensuring speed, quality, and sustainable engineering practices',
          tag: 'responsible AI'
        },*/
        {
            number: '05',
            title: 'Evolving with Technology, leading Through Change',
            description: 'Navigated multiple waves of technology evolution — enterprise modernization, cloud adoption to today\'s AI transformation — turning emerging capabilities into practical engineering outcomes',
            tag: 'technology leadership'
        },
        {
          number: '06',
            title: 'Build People, metrics will follow',
            description: 'Created an environment where engineers had clear growth paths, challenging work, and regular coaching. Lower attrition was a consequence of investing in people — not the objective',
            tag: 'team development'
        }
      ]
    },
    work: {
      label: 'Selected work',
      title: 'Programmes that changed something',
      entries: [
        {
          org: 'Collins Aerospace',
          period: 'Jul 2023 – Oct 2025',
          domain: 'Aerospace Manufacturing<br>MES · Digital Transformation<br>Regulated Environment',
          title: 'First-ever global MES implementation — built from the ground up',
          description: 'Led delivery of a $50M paper-to-digital programme with no prior MES foundation at site. Partnered with iBaseT (MES ISV) on Solumina platform integration, designed end-to-end execution, coordinated across engineering, manufacturing operations and IT infrastructure under ATO and export compliance requirements.',
          result: '→ 30% efficiency gain · global delivery model · US, Europe, Asia'
        },
        {
          org: 'Collins Aerospace',
          period: 'Jan 2021 – Jul 2023',
          domain: 'Cloud Platform<br>AWS · Azure<br>Post-merger',
          title: 'Cloud scaling for an organisation that doubled overnight',
          description: 'Drove AWS and Azure platform scaling supporting post-merger growth from 40,000 to 80,000 employees. Coordinated across architecture, infrastructure and business teams to deliver a unified platform. Ran parallel team upskilling programme to build internal capability and reduce external hiring dependency.',
          result: '→ Unified infrastructure live day one · new workstreams opened internally'
        },
        {
          org: 'Wipro · Walmart',
          period: 'Jan 2015 – Jun 2017',
          domain: 'E-commerce<br>React · Responsive<br>Mobile-first',
          title: 'Walmart\'s first mobile-compatible e-commerce platform',
          description: 'Stepped into a technical leadership gap on a live project — took ownership of direction for a 7-member team, drove React and responsive design adoption, and delivered a production-ready platform across two market segments on a new technology stack.',
          result: '→ First mobile platform for client · team self-taught React on a live project'
        }
      ]
    },
    principles: {
      label: 'What I believe',
      title: 'Earned through 18 years, across projects, products, programs, teams and deliveries; not borrowed from a framework',
      items: [
        {
          key: 'on quality',
          value: '<strong>Quality doesn\'t slip under delivery pressure.</strong> It slips when there\'s no structure to protect it. Build the structure before the pressure arrives.'
        },
        {
          key: 'on safety',
          value: 'Engineers grow when they feel safe to take risks, not when they\'re told to. <strong>Psychological safety is an engineering output</strong> — it shows up in how early risks get raised and whether people speak up when something is wrong.'
        },
        {
          key: 'on translation',
          value: 'The best technical decisions happen when engineers and business stakeholders speak the same language. <strong>That translation is a leadership job.</strong> It works in both directions.'
        },
        {
          key: 'on legacy',
          value: '<strong>A team\'s capability is the most durable thing you can build.</strong> Programmes end. Platforms get replaced. The engineers you\'ve developed carry what they learned into every team after you.'
        },
        {
          key: 'on AI',
          value: 'AI is changing how software is built, but not what great engineering requires. The challenge isn\'t adopting AI — <strong>it\'s adopting it with judgment, accountability, and engineering discipline.</strong>',
          tag: 'responsible AI'
        }
      ]
    },
    thinking: {
      label: 'Thinking',
      title: 'Writing it down',
      items: [
        {
          tag: '// engineering_leadership · AI',
          title: 'AI adoption is a leadership problem, not a technology problem',
          description: 'When we introduced GitHub Copilot at Collins, the hardest part wasn\'t the tooling. How do you adopt AI without creating dependency or weakening core engineering skills? I\'ve worked through this hands-on.',
          status: 'status: drafting'
        },
        {
          tag: '// engineering_culture',
          title: 'What attrition actually tells you about an engineering team',
          description: 'A 15% attrition rate looks like a retention problem. It\'s usually a culture problem dressed as one. I reduced attrition from ~15% to under 5% in two years — not by improving benefits.',
          status: 'status: drafting'
        }
      ]
    },
    word: {
      label: 'In their words',
      title: 'What my teams and peers said about my work',
      description: 'Combined from farewell messages and recommendations, these are the qualities that came up most often.'
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s talk about the work',
      intro: [
        'Based in the Netherlands. Open to senior engineering leadership roles where I can bring my experience in building high-performing teams, delivering complex technology programmes, and leading engineering organisations through growth and transformation.',
        'Also happy to talk to peers — engineering culture, AI adoption, leadership at scale, building teams in new markets. These are conversations worth having.'
      ],
      skills: ['Java', 'JavaScript', '.NET/Xamarin', 'ReactJS' ,'Angular' ,'AWS', 'Azure', 'SAFe', 'DevOps', 'GitHub Copilot', 'Claude'],
      links: [
        { label: 'LinkedIn', value: 'https://www.linkedin.com/in/shruthi-sridhara-02396010/', href: 'https://www.linkedin.com/in/shruthi-sridhara-02396010/' },
        { label: 'Email', value: 'shruthiks85@gmail.com', href: 'mailto:shruthiks85@gmail.com' }
      ]
    }
  },
  footer: {
    text: '© 2026 Shruthi Sridhara · Netherlands',
    status: 'open to opportunities'
  }
};
