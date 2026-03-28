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
import invitationData from '@/data/invitation.json';
import Image from 'next/image';
import ParallaxBackground from '@/components/ParallaxBackground';

export default async function GuestPage({ params }: { params: Promise<{ guest_name: string }> }) {
  const { couple, wedding, welcome_message, events, gallery, rsvp, extra_info, music } = invitationData;
  const { guest_name } = await params;
  const guestName = guest_name ? decodeURIComponent(guest_name).replace(/-/g, ' ') : '';

  return (
    <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh', width: '100%', position: 'relative' }}>
      {/* 3D Video Parallax Background */}
      <ParallaxBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>

      {/* Guest Personalization Banner */}
      <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          zIndex: 2000, 
          background: 'var(--color-deep-blue)', 
          color: 'white', 
          padding: '1rem', 
          textAlign: 'center', 
          fontSize: 'clamp(0.6rem, 2vw, 0.8rem)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.4em', 
          fontWeight: 900, 
          borderBottom: '1px solid var(--color-gold)', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)' 
      }}>
         Special Guest Invitation: {guestName}
      </div>

      {/* Hero Section */}
      <Hero 
        groom={couple.groom} 
        bride={couple.bride} 
        date={wedding.date} 
        time={wedding.time} 
      />

      {/* Personalized Greeting Section */}
      <section style={{ 
          backgroundColor: 'white', 
          padding: 'clamp(5rem, 15vw, 15rem) 0', 
          textAlign: 'center', 
          position: 'relative', 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
      }} className="texture-canvas">
          <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: 'white', padding: 'clamp(3rem, 10vw, 8rem)', borderRadius: '4rem', boxShadow: '0 50px 100px rgba(0,0,0,0.1)', border: '1px solid var(--color-gold)', width: '100%', maxWidth: '900px' }}>
               <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.8em', fontWeight: 900, marginBottom: '3rem', display: 'block' }}>
                  To Our Dearest
               </span>
               <h2 className="font-cinzel" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)', color: 'var(--color-deep-blue)', fontWeight: 900, marginBottom: '4rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                  {guestName}
               </h2>
               <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--color-gold)', margin: '4rem auto', opacity: 0.3 }} />
               <p className="font-serif" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', color: '#666', fontStyle: 'italic', lineHeight: 2, maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
                  "Your presence will add so much happiness to our celebration. We can't wait to see you!"
               </p>
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '400px', height: '400px', opacity: 0.1, pointerEvents: 'none' }}>
             <Image src="/images/florals.png" alt="Flowers" fill className="object-contain" />
          </div>
       </section>

      <section id="invitation">
        <Welcome message={welcome_message} />
      </section>

      <section id="story">
        <Gallery items={gallery} />
      </section>

      <section id="events">
        <Events events={events} />
      </section>

      <Countdown date={wedding.date} />

      <section id="venue">
        <Venue 
          name={wedding.venue_name} 
          address={wedding.venue_address} 
          location={wedding.location} 
          mapsUrl={wedding.google_maps_url} 
        />
      </section>


      <InfoSection 
        dressCode={extra_info.dress_code}
        parking={extra_info.parking}
        accommodation={extra_info.accommodation}
        hashtag={wedding.hashtag}
      />

      <Footer 
        groom={couple.groom} 
        bride={couple.bride} 
      />

      <MusicPlayer url={music.url} />
      </div>
    </main>
  );
}
