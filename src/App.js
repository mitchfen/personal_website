// Components
import About from './components/About'
import Project from './components/Project'

function App() {
  return (

    <div className="row">
      
      {/* Left empty column for spacing */}
      <div className="col-sm-1"></div>
      
      {/* Main column which contains all components */}
      <div className="col-sm-10">
        <br/>
        <About />
        <h3 className="justifyRight"> &#9660; Checkout some of my Projects</h3>
        <hr/>
        { /* Carousel */}
        <div id="projectCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Project 
                title="QEMU Home Server" 
                bulletPoint0="I built my own home server running Linux as the host OS. Using QEMU I run a Windows 10 VM and a pfSense VM. I use VFIO to pass the NVME SSD, the second graphics card, and a USB controller through to the Windows VM." 
                bulletPoint1="Inside the pfSense VM, I setup pfBlocker to block malicious websites at the router level." 
                bulletPoint2="Setup Grafana and Samba for monitoring and file sharing on the host." 
                repoLink=""
                tags={['Hardware', 'Virtualization', 'pfSense', 'Samba', 'Grafana']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="openAlt"
                bulletPoint0="A full stack web app to visualize how and where scientific papers are discussed online." 
                bulletPoint1="Designed a database capable of displaying user queries over 50,000 entries, contributing full-stack to frontend and backend." 
                bulletPoint2="I was the team lead in our group of four. I had to teach myself new concepts, keep the team on track, and work effectively under pressure." 
                repoLink="https://github.com/tdbowman-CompSci-F2020/openAlt"
                tags={['Python', 'Flask', 'MySQL', 'Bootstrap', 'JavaScript']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Adrift" 
                bulletPoint0="A text adventure game inspired by Zork." 
                bulletPoint1="My longest side project, I wrote this during my first year of programming." 
                bulletPoint2="" 
                repoLink="https://github.com/mitchfen/Adrift"
                tags={['C++']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Grafana Dashboard for my pfSense router" 
                bulletPoint0="I wanted to learn about networking, so I setup an old Dell Optiplex with pfSense!" 
                bulletPoint1="This allows me to do cool things like setup a DNS black hole and VLANs. The Grafana dashboard is a great way to view all the stats and get started with a homelab. This is also how I learned about networking!" 
                bulletPoint2="" 
                repoLink="https://github.com/mitchfen/mitchfen_grafana_dash"
                tags={['pfSense', 'Grafana', 'InfluxDB', 'Telegraf']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Librebooting my X200" 
                bulletPoint0="The Intel Management Engine is spooky. Nobody can prove whether it is doing anything nefarious because the code is not open source. I wanted a computer that is 100% FOSS, so I installed Libreboot - an open source BIOS implementation." 
                bulletPoint1="I picked up an old Thinkpad X200 on eBay (a couple actually). I scavanged the good parts from the machines and cobbled together an almost flawless X200. Then, with a lot of Reddit and YouTube tutorials I was able to flash Libreboot to the BIOS chip using a Raspberry Pi." 
                bulletPoint2="As a bonus, I replaced the TN panel with an IPS panel!"
                tags={['Firmware', 'Hardware']}
                repoLink=""/>
            </div>
            <div className="carousel-item">
              <Project 
                title="Windows Setup Script" 
                bulletPoint0="I wrote this Powershell script to automate the process of setting up my Windows machines." 
                bulletPoint1="It installs the chocolatey package manager, then uses choco commands to install my frequently used programs." 
                bulletPoint2="" 
                repoLink="https://github.com/mitchfen/Windows_Setup_Script"
                tags={['PowerShell', 'Chocolatey']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Artist Database Builder" 
                bulletPoint0="A GUI program I made with Python and Tkinter." 
                bulletPoint1="I go to a lot of concerts, and was having trouble keeping track of who I've seen." 
                bulletPoint2="I wanted a solution that would allow me to use select statements to find all the artists I saw at a given venue, year, etc." 
                repoLink="https://github.com/mitchfen/Artist_Database_Builder"
                tags={['Python', 'Tkinter', 'SQLite']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="mp3 + wav renamer" 
                bulletPoint0="Python script I wrote to help organize my mess of a music library." 
                bulletPoint1="Each mp3 or wav is read into a list. The songs are played in turn, and you can delete or rename them." 
                bulletPoint2="This was a good introduction to Python and got me thinking about what else I can automate." 
                repoLink="https://github.com/mitchfen/mp3_wav_Renamer"
                tags={['Python']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Budget Minimalism" 
                bulletPoint0="Android budgeting app built as part of a software engineering class." 
                bulletPoint1="This taught me how to use GitHub as part of a team." 
                bulletPoint2="" 
                repoLink="https://github.com/WSU-4110/Budget-Minimalism"
                tags={['Android', 'Java', 'SQLite']}
                />
            </div>
            <div className="carousel-item">
              <Project 
                title="Light Sensing App" 
                bulletPoint0="Simple Android app that polls the light sensor on a timer. It also writes sensor data to a text file."
                bulletPoint1=""
                bulletPoint2="" 
                repoLink="https://github.com/mitchfen/light_sensing_app"
                tags={['Android', 'Java']}
                />
            </div>
          </div>
          <a className="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* Footer will go here*/}

      </div>
    </div>
  )
}

export default App