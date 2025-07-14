// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits'; // unique brand identifier
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits'; // unique brand identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}