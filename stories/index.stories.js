import { action } from '@storybook/addon-actions';

import Button from './button.svelte';
import Movie from '../src/Movie.svelte';
import Search from '../src/Search.svelte';
import "./tailwind.css";

export default {
  title: 'Button',
  component: Button,
};

export const MovieStory = () => ({
  Component: Movie
});

export const SearchStory = () => ({
  Component: Search
});

export const Text = () => ({
  Component: Button,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});
