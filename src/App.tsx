import avatar from './avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Trans, useTranslation } from 'react-i18next';

// Color for paper ranks
// CCF-C green; CCF-B blue; CCF-A purple; TOP orange

const CCF = ({ rank, children }: { rank?: 'C' | 'B' | 'A' | 'S' | undefined | null, children: React.ReactNode }) => {
  let color = '';
  switch (rank) {
    case 'C':
      color = 'bg-green-600/10 text-green-600 hover:bg-green-600/20';
      break;
    case 'B':
      color = 'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20';
      break;
    case 'A':
      color = 'bg-purple-600/10 text-purple-600 hover:bg-purple-600/20';
      break;
    case 'S':
      color = 'bg-orange-600/10 text-orange-600 hover:bg-orange-600/20';
      break;
    default:
      color = 'bg-gray-600/10 text-gray-600 hover:bg-gray-600/20';
      break;
  }
  return (
    <span className={"p-1 text-sm rounded font-bold transition-all duration-150 " + color}>
      {children}
    </span>
  )
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className='border-b-[1px] border-gray-300 dark:border-gray-300/50 py-4 font-bold md:text-3xl sm:text-2xl text-xl'>
    {children}
  </h2>
)

const Publication = ({ year, title, authors, source, href, rank }: { year: number, title: string, authors: string, source: string, href: string, rank?: 'C' | 'B' | 'A' | 'S' | undefined | null }) => {
  return (
    <div className="grid grid-cols-10 sm:grid-cols-12 pt-4">
      <div className="col-span-2 text-gray-500/90 dark:text-gray-400/90 text-sm">
        {year}
      </div>
      <div className="col-span-10">
        <div className='secondary-text opacity-80 text-sm'>
          {authors.split(',').map((author, index) => (
            <span key={index} className={author.trim() === 'D Zou' ? 'opacity-100 font-bold' : ''}>
              {author.trim() === 'J Tao' ? author + ' ' : author}
              {author.trim() === 'J Tao' ? <FontAwesomeIcon icon={faCircleInfo} /> : ''}
              {index === authors.split(',').length - 1 ? '' : ', '}
            </span>
          ))
          }
        </div>
        <div className='heading-text font-bold '>
          <a href={href} target='_blank' rel="noreferrer">
            {title}
          </a>
        </div>
        <div className='leading-8'>
          <CCF rank={rank}>{source}</CCF>
        </div>
      </div>
    </div>
  )
}

function App() {
  const { t } = useTranslation();

  return (
    <div className='flex min-h-screen flex-col'>
      <div className="mt-8 flex-1 flex flex-col justify-center">
        <div className="mx-auto max-w-4xl px-6 mb-6">

          <div className='flex flex-col items-center'>
            <img className='rounded-full'
              src={avatar}
              width={128}
              height={128}
              alt="avatar" />

            <h1 className='py-4 font-extrabold md:text-4xl sm:text-3xl text-2xl'>
              {t('zoudikai')}
            </h1>

            <div className=''>
              <a className='px-2 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400' href='https://github.com/Kherrisan' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className='px-2 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400' href='mailto:zoudikai@outlook.com' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a className='px-2 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400' href='https://scholar.google.com/citations?user=zILf1s4AAAAJ&hl=en' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGraduationCap} />
              </a>
              <a className='px-2 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400' href='https://xlog.kendrickzou.com' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </div>
          </div>

          <H2>
            {t('biography')}
          </H2>

          <div className='text-dark-900/80 dark:text-light-900/80 pt-4'>

            <p className='leading-8'>
              <Trans i18nKey="biographyText">
                I am currently pursuing 🎓MSc degree at the School of Cyber Science and Technology,{' '}
                  <a className='amber-text underline' href='https://www.seu.edu.cn'>
                    Southeast University
                  </a>
                ,
                under the supervision of Prof. Jun Tao.
                Before that, I received my BSc degree in software engineering from Southeast University.
                <br />
                My research interests include{' '}
                <span className="font-bold">
                  Reinforcement Learning
                </span>
                ,{' '}
                <span className="font-bold">
                  Blockchain
                </span>{' '}and{' '}
                <span className="font-bold">
                  Crowdsourcing
                </span>.
              </Trans>
            </p>
          </div>

          <H2>
            {t('publications')}
          </H2>

          <Publication year={2023} title='Benefit-Oriented Task Offloading in UAV-Aided Mobile Edge Computing: An Approximate Solution' authors='Y Gao, J Tao, H Wang, Z Wang, D Zou, Y Xu' source='Peer-to-Peer Networking and Applications' href='https://assets.researchsquare.com/files/rs-1604586/v1_covered.pdf?c=1651681336' rank='C'/>

          <Publication year={2023} title='Privacy-Preserving Data Aggregation in IoTs: A Randomize-then-Shuffle Paradigm' authors='Z Wang, J Tao, D Zou' source='IEEE 97th Vehicular Technology Conference (VTC2023-Spring)' href='https://dl.acm.org/doi/10.1145/3579093' />

          <Publication year={2023} title='Towards the Minimal Wait-for Delay for Rechargeable WSNs with Multiple Mobile Chargers' authors='Z Wang, J Tao, Y Xu, Y Gao, D Zou' source='ACM Transactions on Sensor Networks' href='https://dl.acm.org/doi/10.1145/3579093' rank='B' />

          <Publication year={2023} title='Joint Optimization between Task Offloading and Resource Allocation in Mobile Edge Computing with multiple UAVs' authors='R Chen, Y Gao, D Zou, X Chen, J Tao' source='Preprint' href='https://www.researchsquare.com/article/rs-2771347/v1' />

          <H2>
            {t('interests')}
          </H2>

          <div className='text-dark-900/80 dark:text-light-900/80 pt-4 mb-auto'>
            <ul className='list-disc list-inside leading-7 font-semibold'>
              <li>{t('blockchain')} / {t('smart contract')}</li>
              <li>{t('reinforcement learning')}</li>
              <li>{t('mobile crowdsourcing')} / {t('crowdsensing')}</li>
            </ul>
          </div>

        </div>
      </div>

      <footer className='primary-text p-4 text-center text-xs mt-12 mb-8'>
        <div>
          备案号xxxxxxxx
        </div>
      </footer>
    </div>
  );
}

export default App;
