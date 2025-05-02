import {
  HeroSectionGroups,
  HeroSectionOrganise,
  HeroSectionTitle,
} from '../components/loggedouthome/HeroSections';

export default function LoggedOutHome() {
  return (
    <div>
      <HeroSectionTitle />
      <HeroSectionOrganise />
      <HeroSectionGroups />
    </div>
  );
}
