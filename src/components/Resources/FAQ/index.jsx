import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import LinkedText from '../../_shared/LinkedText';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 12,
    padding: theme.spacing.unit * 3,
  },
  link: {
    color: theme.palette.primary[900],
    textDecoration: 'underline',
  },
  questionHeader: {
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 3,
  },
});

const faq = [
  {
    id: 'what-is-acupuncture',
    question: 'What is acupuncture?',
    href: '#what-is-acupuncture',
    text: 'Acupuncture, one of the modalities used in Traditional Chinese Medicine, is the insertion of sterile needles into the body at specific points that have been shown to help with the treatment of many different health issues. Acupuncture has been around for thousands of years, and continues to stay a prominent form of medicine because it is so effective at treating and helping people. There are over 1000 known points on the body, many of them are also well known trigger and motor points in western medicine. There is overwhelming evidence that acupuncture is a great way to naturally treat the body, and the World Health Organization (WHO) recommends it for many conditions including pain, digestive issues, respiratory issues, and many more.',
  },
  {
    id: 'how-does-acupuncture-work',
    question: 'How does acupuncture work?',
    href: '#how-does-acupuncture-work',
    text: 'Modern Western Medicine does not yet have a scientific explanation for how acupuncture works but acknowledges that it is indeed highly effective for many conditions. What science has shown is that after receiving acupuncture there is less inflammation in the body and circulation is improved. In Chinese theory, acupuncture is based on the flow of Qi (like energy) throughout the body. Acupuncture can help the flow of the Qi, so that areas that are stagnant and more excess can be moved and cleared, and areas that are more deficient and weak can be built up and nourished.  It is a way of restoring balance in the body.',
  },
  {
    id: 'will-acupuncture-hurt',
    question: 'Will acupuncture hurt?',
    href: '#will-acupuncture-hurt',
    text: 'Acupuncture needles are very thin, not much thicker than a human hair. They are filiform, not hollow like the needles used to draw blood or administer medications. The insertion of these needles is practically painless. In some cases the patient will not feel the needles at all, or in other cases the patient may feel a slight prick, a sensation of warmth, heaviness, or spreading. Many find the experience to be very enjoyable and relaxing.  For individuals who are very sensitive there are ways of working with the breath and distraction to help the treatment go more smoothly.  Let your practitioner know if you are sensitive or worried.',

  },
  {
    id: 'is-acupuncture-safe',
    question: 'Is acupuncture safe?',
    href: '#is-acupuncture-safe',
    text: 'When performed by a trained and licensed professional this medicine is extremely safe. At the clinic we follow Clean Needle Technique protocols. We also use sterile and individually packaged materials so there is no risk of infection or contamination.',
  },
  {
    id: 'how-many-treatments-will-i-need',
    question: 'How many treatments will I need?',
    href: '#how-many-treatments-will-i-need',
    text: 'One of the beautiful things about this medicine is that we treat everyone as a unique individual and therefore your treatment plan will be personalized and tailored to your needs. The number of treatments depends on a few factors, including the severity and duration of the condition, as well as the nature of the issue. On average we estimate 6-8 treatments to see changes for moderate issues, longer for more chronic and complicated cases. In some cases people will feel relief after only one visit, while others may need ongoing treatment for maintenance. Here at Bristlecone Wellness we do our best to get you the care you need while managing your expectations and respecting your wallet.  Often times the practitioner may give you “homework” to help with the effects of the treatment and to increase your healing/recovery time. This may include diet recommendations/ food journals, self-massage, home exercises and Chinese herbal therapies.',
  },
  {
    id: 'what-should-i-expect-during-first-visit',
    question: 'What should I expect during my first visit?',
    href: '#what-should-i-expect-during-first-visit',
    text: 'During your first visit we will have some paper work for you to fill out, and then the practitioner will conduct the initial interview. The first visit usually takes about 90 minutes, with follow up visits taking about an hour. The practitioner will ask questions about your chief complaints, lifestyle, diet, body functions, and will feel your pulse and look at your tongue (Chinese Medicine diagnostic tools).  The practitioner will then come up with a treatment plan and discuss with you how many visits they anticipate the course of treatment will take, and will suggest other modalities that may be useful in your treatments, including cupping, body work, moxibustion, guasha and herbal therapies to name a few. 24 hours after your first visit the practitioner will contact you to check in and see how you are feeling and doing after the treatment.',
  },
  {
    id: 'what-should-i-do-before-a-treatment',
    question: 'What should I do before a treatment?',
    href: '#what-should-i-do-before-a-treatment',
    text: 'Arrive to your appointment 10-15 minutes early. We like you to be able to relax for a few moments before your treatment. We have found that the treatments go smoother and are more effective when the patients are relaxed and not feeling rushed. You can also enjoy some complimentary teas/water and use the facilities if you desire. Wear comfortable and loose clothing. Often the practitioner will need to access the body up to the elbows and knees, or sometimes the back abdomen or chest. If in the event you do not come dressed accordingly we will provide gowns and blankets for proper draping. Try to avoid coming for a treatment if you are excessively fatigued, hungry, full, after consuming alcohol, using marijuana or other recreational drugs.',
  },
  {
    id: 'what-should-i-expect-after-a-treatment',
    question: 'What should I expect after a treatment?',
    href: '#what-should-i-expect-after-a-treatment',
    text: 'Some patients feel dramatic relief after a single treatment, while for others it can take some time to experience those changes. Take note after your treatment of your symptoms and how long they take to come back, if at all. Some patients will feel extremely relaxed after a session, and many patients will experience improvements in their sleep, mood, and digestion even if that’s not what they came in for. After your treatment take it easy and try to relax.',
  },
];

function Forms(props) {
  const { classes } = props;
  configureAnchors({ offset: -80, scrollDuration: 300 });

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid
            item
            style={{ paddingBottom: 16 }}
            xs={12}
            sm={10}
            md={8}
            lg={7}
          >
            <Typography variant="headline">
              F.A.Q.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={7}
            style={{ paddingBottom: 32 }}
          >
            {faq.map(item => (
              <Typography variant="body2" key={item.id}>
                {'\u2022 '}
                <LinkedText link={item.href} text={item.question} />
              </Typography>))}
          </Grid>
          {faq.map(item => (
            <Grid item xs={12} key={item.id}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <ScrollableAnchor id={item.id}>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    md={8}
                    lg={7}
                    className={classes.questionHeader}
                  >
                    <Typography variant="title">
                      {item.question}
                    </Typography>
                  </Grid>
                </ScrollableAnchor>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={8}
                  lg={7}
                >
                  <Typography variant="body2">
                    {item.text}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>))}
        </Grid>
      </Grid>
    </Grid>
  );
}

Forms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forms);
