import AnxietyBadge from "../public/assets/badges/Anxiety.png"; 
import ADHDBadge from "../public/assets/badges/ADHD.png";
import AntisocialBadge from "../public/assets/badges/Antisocial.png";
import AutismBadge from "../public/assets/badges/autism.png";
import BipolarBadge from "../public/assets/badges/Bipolar.png";
import BPDBadge from "../public/assets/badges/BPD.png";
import CPTSDBadge from "../public/assets/badges/CPTSD.png";
import DepressionBadge from "../public/assets/badges/Depression.png";
import OCDBadge from "../public/assets/badges/OCD.png";
import EatingDisorderBadge from "../public/assets/badges/EatingDisorder.png";
import NarcissisticBadge from "../public/assets/badges/Narcissistic.png";
import SchizophreniaBadge from "../public/assets/badges/schizophrenia.png";
import SubstanceBadge from "../public/assets/badges/substance.png";  

export const questions = [
  {
    id: 1,
    text: "Do you ever feel like your brain is a never-ending group chat of worries? 📱🌪️",
    category: "Anxiety"
  },
  {
    id: 2,
    text: "Do you overthink so much that your brain needs a 'stop overthinking' button? 🛑🧠",
    category: "Anxiety"
  },
  {
    id: 3,
    text: "Ever get those sudden 'oh no' moments where your heart's racing like you saw your ex at a party? 😱",
    category: "Anxiety"
  },
  {
    id: 4,
    text: "Do you have an exit strategy for social events, just in case your anxiety kicks in? 🚪👀",
    category: "Anxiety"
  },
  {
    id: 5,
    text: "Do you have days where you're the CEO of Everything and days where you're the CEO of Netflix? 📈📉",
    category: "Bipolar"
  },
  {
    id: 6,
    text: 'Do you switch from "lets party all night" to "leave me alone in my cave" within hours? 🥳🏡',
    category: "Bipolar"
  },
  {
    id: 7,
    text: "Do you ever feel like your mood has its own personal rollercoaster track? 🎢😂",
    category: "Bipolar"
  },
  {
    id: 8,
    text: "Do you start a new project with full energy but abandon it halfway through because “meh”? 🚀🛑",
    category: "Bipolar"
  },
  {
    id: 9,
    text: "Do you have mood swings that make even the weather seem stable? 🌦️😬",
    category: "Borderline Personality Disorder"
  },
  {
    id: 10,
    text: "Do you feel like your emotions are on a 0-100 scale with no chill in between? 🚀😢",
    category: "Borderline Personality Disorder"
  },
  {
    id: 11,
    text: "Do you find yourself clinging to people like they’re the last slice of pizza at a party? 🍕🙃",
    category: "Borderline Personality Disorder"
  },
  {
    id: 12,
    text: "Do you ever feel like you’re the drama queen/king/royalty of your own reality show? 🎬👑",
    category: "Borderline Personality Disorder"
  },
  {
    id: 13,
    text: "Do you ever feel like you’re the main character and everyone else is just NPCs? 👑🌟",
    category: "Narcissistic"
  },
  {
    id: 14,
    text: "Do you love to take selfies because no one else captures your beauty like you do? 📸😎",
    category: "Narcissistic"
  },
  {
    id: 15,
    text: "Do you find it hard to relate to others because they just don’t get how awesome you are? 🤷‍♂️🙌",
    category: "Narcissistic"
  },
  {
    id: 16,
    text: "Do you secretly believe the world would be a better place if everyone was just like you? 🌍💯",
    category: "Narcissistic"
  },
  {
    id: 17,
    text: "Do you consider yourself a pro at manipulating people for fun and profit? 🎭💵",
    category: "Antisocial"
  },
  {
    id: 18,
    text: "Do you lack remorse like a superhero lacks kryptonite? 🦸‍♂️😏",
    category: "Antisocial"
  },
  {
    id: 19,
    text: "Do you enjoy breaking the rules just because you can? 🛑😈",
    category: "Antisocial"
  },
  {
    id: 20,
    text: "Do you find it easy to lie and cheat your way through life, no guilt involved? 🤥🎲",
    category: "Antisocial"
  },
  {
    id: 21,
    text: "Do you need your room to be as organized as a Pinterest board? 📌🧹",
    category: "Obsessive-Compulsive Disorder"
  },
  {
    id: 22,
    text: "Do you wash your hands so much they think they’re auditioning for a soap commercial? 🧼👏",
    category: "Obsessive-Compulsive Disorder"
  },
  {
    id: 23,
    text: "Do you have to check if the door is locked at least 10 times before leaving the house? 🚪🔒",
    category: "Obsessive-Compulsive Disorder"
  },
  {
    id: 24,
    text: "Do you arrange your apps in a perfect grid because chaos is not your friend? 📱📐",
    category: "Obsessive-Compulsive Disorder"
  },
  {
    id: 25,
    text: "Do your flashbacks play like a horror movie marathon in your head? 🎬😱",
    category: "Complex Post-Traumatic Stress Disorder"
  },
  {
    id: 26,
    text: "Do you avoid certain places or people like they’re toxic waste zones? 🚫☢️",
    category: "Complex Post-Traumatic Stress Disorder"
  },
  {
    id: 27,
    text: "Do you feel like you’re stuck in a time loop of past traumas and can’t escape? 🔄😞",
    category: "Complex Post-Traumatic Stress Disorder"
  },
  {
    id: 28,
    text: "Do you have a mental suitcase full of guilt and shame from past events, even though no one else remembers? 🧳😞",
    category: "Complex Post-Traumatic Stress Disorder"
  },
  {
    id: 29,
    text: "Do you sometimes hear voices and think, “Who invited you to my brain party?” 🗣️🎉",
    category: "Schizophrenia"
  },
  {
    id: 30,
    text: "Do you feel like you’re living in a parallel universe where reality is just a suggestion? 🌌🤔",
    category: "Schizophrenia"
  },
  {
    id: 31,
    text: "Do you ever see or hear things that are definitely not there, like a glitch in the matrix? 👾🧩",
    category: "Schizophrenia"
  },
  {
    id: 32,
    text: "Do you feel like you’re the star of your own spy thriller, with everyone out to get you? 🕶️🔫",
    category: "Schizophrenia"
  },
  {
    id: 33,
    text: "Do you have a love-hate relationship with food like it’s your ex? 🍔💔",
    category: "Eating Disorder"
  },
  {
    id: 34,
    text: "Do you eat like you're in a food competition but regret it immediately after? 🍕😓",
    category: "Eating Disorder"
  },
  {
    id: 35,
    text: "Do you count calories like you’re a math major? 🧮🍎",
    category: "Eating Disorder"
  },
  {
    id: 36,
    text: "Do you go to extreme lengths to avoid gaining weight, like you’re training for the Hunger Games? 🏹🍽️",
    category: "Eating Disorder"
  },
  {
    id: 37,
    text: "Do you have the attention span of a goldfish and get distracted by every shiny thing? 🐠✨",
    category: "ADHD/ADD"
  },
  {
    id: 38,
    text: "Do you start 10 projects and finish none because something else caught your eye? 🚀📚",
    category: "ADHD/ADD"
  },
  {
    id: 39,
    text: "Do you feel like you’re running on a hamster wheel 24/7? 🐹🏃‍♂️",
    category: "ADHD/ADD"
  },
  {
    id: 40,
    text: "Do you have a hard time sitting still, like your chair is made of lava? 🔥💺",
    category: "ADHD/ADD"
  },
  {
    id: 41,
    text: "Do you find social cues as confusing as trying to understand a TikTok dance tutorial? 🕺🤷‍♀️",
    category: "Autism"
  },
  {
    id: 42,
    text: "Do you feel like you’re an alien trying to blend in with the humans but missing the mark? 👽🎯",
    category: "Autism"
  },
  {
    id: 43,
    text: "Do you prefer routine so much that a change feels like a plot twist in your life? 🔄😲",
    category: "Autism"
  },
  {
    id: 44,
    text: "Do social cues feel like decoding hieroglyphics to you? 🗿🤔",
    category: "Autism"
  },
  {
    id: 45,
    text: "Do you party hard and then wonder why you thought five shots of tequila was a good idea? 🍻🤦‍♂️",
    category: "Substance Use Disorder"
  },
  {
    id: 46,
    text: "Do you drink to forget and then forget how much you drank? 🍷🤷‍♀️",
    category: "Substance Use Disorder"
  },
  {
    id: 47,
    text: "Do you find yourself drinking alone more often than not? 🍸🕺",
    category: "Substance Use Disorder"
  },
  {
    id: 48,
    text: "Do you convince yourself that 'just one more' won’t hurt, every single time? 🍷😅",
    category: "Substance Use Disorder"
  },
  { 
    id: 49,
    text: "Do you vibe with sad playlists on Spotify way too often? 🎧💔",
    category: "Depression"
  },
  {
    id: 50,
    text: "Do you feel like you’re wearing a lead suit that’s dragging you down? 🪖😞",
    category: "Depression"
  },
  {
    id: 51,
    text: "Do you feel like your bed has turned into a black hole that you can’t escape from? 🛏️🌌",
    category: "Depression"
  },
  {
    id: 52,
    text: "Do you find joy in nothing but feel like you should be happy about everything? 😐✨",
    category: "Depression"
  }
];

export type Question = (typeof questions)[number];


export const categoriesWithDetails = [
  { id: "anxiety", category: "Anxiety", badge: AnxietyBadge },
  { id: "bipolar", category: "Bipolar", badge: BipolarBadge },
  { id: "borderline_personality_disorder", category: "Borderline Personality Disorder", badge: BPDBadge },
  { id: "narcissistic", category: "Narcissistic", badge: NarcissisticBadge },
  { id: "antisocial", category: "Antisocial", badge: AntisocialBadge },
  { id: "ocd", category: "Obsessive-Compulsive Disorder", badge: OCDBadge },
  { id: "cptsd", category: "Complex Post-Traumatic Stress Disorder", badge: CPTSDBadge },
  { id: "schizophrenia", category: "Schizophrenia", badge: SchizophreniaBadge },
  { id: "eating_disorder", category: "Eating Disorder", badge: EatingDisorderBadge },
  { id: "adhd_add", category: "ADHD/ADD", badge: ADHDBadge },
  { id: "autism", category: "Autism", badge: AutismBadge },
  { id: "substance_use_disorder", category: "Substance Use Disorder", badge: SubstanceBadge },
  { id: "depression", category: "Depression", badge: DepressionBadge }
];