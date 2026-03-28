import Image from 'next/image';
import ParallaxBackground from '@/components/ParallaxBackground';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import RSVP from '@/components/RSVP';
import Venue from '@/components/Venue';
import Countdown from '@/components/Countdown';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import invitationData from '@/data/invitation.json';

export default function Home() {
  const { couple, wedding, welcome_message, events, gallery, rsvp, extra_info, music } = invitationData;

  return (
    <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh', width: '100%', position: 'relative' }}>
      {/* 3D Video Parallax Background */}
      <ParallaxBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>

      {/* Hero Section */}
      <Hero 
        groom={couple.groom} 
        bride={couple.bride} 
        date={wedding.date} 
        time={wedding.time} 
      />

      {/* Welcome Message (Attached immediately to gopuram base) */}
      <section id="invitation" style={{ marginTop: '-40vh', position: 'relative', zIndex: 100 }}>
        <Welcome message={welcome_message} />
      </section>

      {/* Story / Gallery Section */}
      <section id="story">
        <Gallery items={gallery} />
      </section>

      {/* Love Story Timeline (Since 2017) */}
      <Timeline items={invitationData.timeline} />

      {/* Events Section */}
      <section id="events">
        <Events events={events} />
      </section>

      {/* Countdown Timer */}
      <Countdown date={wedding.date} />

      {/* Venue Section */}
      <section id="venue">
        <Venue 
          name={wedding.venue_name} 
          address={wedding.venue_address} 
          location={wedding.location} 
          mapsUrl={wedding.google_maps_url} 
        />
      </section>


      {/* Important Info Section */}
      <InfoSection 
        dressCode={extra_info.dress_code}
        parking={extra_info.parking}
        accommodation={extra_info.accommodation}
        hashtag={wedding.hashtag}
      />

      {/* Footer */}
      <Footer 
        groom={couple.groom} 
        bride={couple.bride} 
      />

      {/* Music Player */}
      <MusicPlayer url={music.url} />
      </div>
    </main>
  );
}
