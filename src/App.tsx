import avatar from './avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


// Color for paper ranks
// CCF-C green; CCF-B blue; CCF-A purple; TOP orange

const CCF = ({ rank, children }: { rank?: 'C' | 'B' | 'A' | 'S' | 'Q1' | 'Q2' | 'Q3' | undefined | null, children: React.ReactNode }) => {
  let color = '';
  switch (rank) {
    case 'C':
    case 'Q3':
      color = 'bg-green-600/10 text-green-600 hover:bg-green-600/20';
      break;
    case 'B':
    case 'Q2':
      color = 'bg-blue-600/10 text-blue-600 hover:bg-blue-600/20';
      break;
    case 'A':
    case 'Q1':
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
    <span className={"p-1 rounded font-bold transition-all duration-150 " + color}>
      {children}
    </span>
  )
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className='border-b-[1px] border-gray-300 dark:border-gray-300/50 py-4 font-bold md:text-3xl sm:text-2xl text-xl'>
    {children}
  </h2>
)

const Publication = ({ year, title, authors, source, href, rank }: { year: number, title: string, authors: string, source: string, href: string, rank?: 'C' | 'B' | 'A' | 'S' | 'Q1' | 'Q2' | 'Q3' | undefined | null }) => {
  return (
    <div className="grid grid-cols-10 sm:grid-cols-12 pt-4">
      <div className="col-span-2 text-gray-500/90 dark:text-gray-400/90">
        {year}
      </div>
      <div className="col-span-10">
        <div className='secondary-text opacity-80'>
          {authors.split(',').map((author, index) => (
            <span key={index} className={author.trim() === 'D Zou' ? 'opacity-100 font-bold' : ''}>
              {author.trim() === 'J Tao' ? author + ' ' : author}
              {author.trim() === 'J Tao' ? <FontAwesomeIcon icon={faCircleInfo} /> : ''}
              {index === authors.split(',').length - 1 ? '' : ', '}
            </span>
          ))
          }
        </div>
        <div className='heading-text font-bold text-lg'>
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

            <h1 className='py-4 font-extrabold md:text-5xl sm:text-4xl text-3xl'>
              Dikai Zou
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
          Biography
          </H2>

          <div className='text-dark-900/80 dark:text-light-900/80 pt-4'>

            <p className='leading-8 text-lg'>
              I am currently pursuing 🎓PhD degree at the {' '}
              <a className='amber-text underline' href='https://cyber.seu.edu.cn'>
              School of Cyber Science and Technology
              </a>
              , Southeast University,
              under the supervision of Prof. Jun Tao.
              Before that, I received my BSc degree in software engineering from Southeast University.
              <br />
              My research interests include{' '}
              <span className="font-bold">
                Program Analysis
              </span>
              {' '}and{' '}
              <span className="font-bold">
                Testing
              </span>{' '}on{' '}
              <span className="font-bold">
                Network Security Protocols
              </span>.
            </p>
          </div>

          <H2>
            Publications
          </H2>
          <Publication year={2025} title='Semantics-aware Location Privacy Preserving: A Differential Privacy Approach' authors='D Zou, J Tao, Z Wang' source='Computers & Security' href='https://www.sciencedirect.com/science/article/pii/S0167404825000914' rank='B'/>

          <Publication year={2024} title='An Accurate and Lightweight Intrusion Detection Model Deployed on Edge Network Devices' authors='Y Ao, J Tao, D Zou, W Sun, L Yu' source='2024 International Joint Conference on Neural Networks (IJCNN)' href='https://ieeexplore.ieee.org/document/10651457' rank='C'/>

          <Publication year={2024} title='A Preference-Driven Malicious Platform Detection Mechanism for Users in Mobile Crowdsensing' authors='H Wang, J Tao, D Chi, Y Gao, D Zou, Y Xu' source='IEEE Transactions on Information Forensics & Security' href='https://dl.acm.org/doi/10.1109/TIFS.2024.3352412' rank='A'/>

          <Publication year={2023} title='IMRSG: Incentive Mechanism Based on Rubinstein-Starr Game for Mobile CrowdSensing' authors='H Wang, J Tao, D Chi, Y Gao, Z Wang, D Zou, Y Xu' source='IEEE Transactions on Vehicular Technology' href='https://ieeexplore.ieee.org/abstract/document/10261277' rank='Q1'/>

          <Publication year={2023} title='Benefit-Oriented Task Offloading in UAV-Aided Mobile Edge Computing: An Approximate Solution' authors='Y Gao, J Tao, H Wang, Z Wang, D Zou, Y Xu' source='Peer-to-Peer Networking and Applications' href='https://link.springer.com/article/10.1007/s12083-023-01499-5' rank='C'/>
          
          <Publication year={2023} title='Privacy-Preserving Data Aggregation in IoTs: A Randomize-then-Shuffle Paradigm' authors='Z Wang, J Tao, D Zou' source='IEEE 97th Vehicular Technology Conference (VTC2023-Spring)' href='https://dl.acm.org/doi/10.1145/3579093' rank='A' />

          <Publication year={2023} title='Towards the Minimal Wait-for Delay for Rechargeable WSNs with Multiple Mobile Chargers' authors='Z Wang, J Tao, Y Xu, Y Gao, D Zou' source='ACM Transactions on Sensor Networks' href='https://dl.acm.org/doi/10.1145/3579093' rank='B' />

          <H2>
           Interests
          </H2>

          <div className='text-dark-900/80 dark:text-light-900/80 pt-4 mb-auto text-lg'>
            <ul className='list-disc list-inside leading-7 font-semibold'>
              <li>🔬 Program Analysis / 🧪 Testing:{' '}
                <span className="font-normal">
                  Fuzzing, (Dynamic) Symbolic Execution, Static Analysis...
                </span>
              </li>
              <li>
                🌐 Security / 💡 IoT Protocol:{' '}
                <span className="font-normal">
                   QUIC, DTLS, MQTT...
                </span>
              </li>
              <li>🤖 Reinforcement Learning</li>
            </ul>
          </div>

        </div>
      </div>

      <footer className='primary-text p-4 text-center text-xs mt-12 mb-8'>
        <div>
          <a href='https://beian.miit.gov.cn/#/Integrated/index'>
            苏ICP备2023016271号
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
