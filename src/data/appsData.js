import screenButlerImage from '../assets/images/screen_butler/screen_butler_main.png';
import meshGradientImage from '../assets/images/swift_mesh_generator/mesh_generator.png';
import decordImage from '../assets/images/decord/decord.png';

export const appsData = [
  {
    id: 'screen-butler',
    name: 'Screen Butler',
    description: 'A MacOS application that renames files based on their content using smart analysis. Features quick actions for browsing files, selecting directories to analyze, and intelligently renaming ambiguous files.',
    imageUrl: screenButlerImage,
    demoUrl: 'https://github.com/Rostammahabadi/screen_butler',
    downloadUrl: 'https://github.com/Rostammahabadi/screen_butler/releases/download/1.0/ScreenButler.zip',
    downloadBtnText: 'Download App',
    technologies: ['Swift', 'SwiftUI', 'CoreML'],
  },
  {
    id: 'mesh-gradient',
    name: 'Mesh Gradient',
    description: 'A SwiftUI component library for creating beautiful, customizable gradients.',
    imageUrl: meshGradientImage,
    demoUrl: 'https://github.com/Rostammahabadi/swift_mesh_generator',
    downloadUrl: 'https://github.com/Rostammahabadi/swift_mesh_generator/releases/download/1.0/MeshGradient.zip',
    downloadBtnText: 'Download Library',
    technologies: ['Swift', 'SwiftUI'],
  },
  {
    id: 'decord',
    name: 'Decord',
    description: 'Instant shareable link to your screen recordings, with data privacy in mind.',
    imageUrl: decordImage,
    demoUrl: 'https://decord.app',
    downloadUrl: 'https://decord.app',
    downloadBtnText: 'Download App',
    technologies: ['Swift', 'SwiftUI', 'CoreML'],
  }
]; 