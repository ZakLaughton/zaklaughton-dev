---
title: Delivery Forecast
description: A probabilistic delivery forecasting tool that runs Monte Carlo simulations to predict when software projects will ship, based on real team velocity rather than guesses.
publishDate: 2025-01-01
isFeatured: true
---

[deliveryforecast.app](https://deliveryforecast.app) is a tool I built to bring probabilistic forecasting to engineering teams -- without the spreadsheet setup or the hand-wavy "story points" debates.

You enter completed work items from recent weeks (your real throughput), the number of remaining items, and a start date. The tool runs 10,000 Monte Carlo simulations and returns a distribution of likely completion dates -- from fastest to slowest, with likelihood percentages at each point.

My squad at Atlassian started using it toward the end of my time there. It replaced multi-hour initial estimation sessions and kept ongoing weekly re-forecasting under 30 minutes.

Built with React and TypeScript.
