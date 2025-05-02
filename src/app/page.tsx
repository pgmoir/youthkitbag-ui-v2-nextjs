import {
  HeroSectionGroups,
  HeroSectionOrganise,
  HeroSectionSignup,
  HeroSectionTitle,
  HeroSectionTrade,
  HeroSectionTrust,
} from '../components/loggedouthome/HeroSections';

export default function LoggedOutHome() {
  return (
    <div>
      <HeroSectionTitle />
      <HeroSectionOrganise />
      <HeroSectionGroups />
      <HeroSectionTrust />
      <HeroSectionTrade />
      <HeroSectionSignup />
    </div>
  );
}
