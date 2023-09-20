import React from 'react'
import $ from 'jquery'
import Album from './Album'
import AlbumSelection from './AlbumSelection'
import Results from './Results'
import {debutTracks, fearlessTracks, speaknowTracks, redTracks, tracks1989, reputationTracks, loverTracks, folkloreTracks, evermoreTracks, midnightsTracks} from './tracklists'
class App extends React.Component {
    constructor(props) {
      super(props);
      this.buttonClick1 = this.buttonClick1.bind(this);
      this.buttonClick2 = this.buttonClick2.bind(this);
      this.buttonClick3 = this.buttonClick3.bind(this);
      this.buttonClick4 = this.buttonClick4.bind(this);
      this.buttonClick5 = this.buttonClick5.bind(this);
      this.buttonClick6 = this.buttonClick6.bind(this);
      this.buttonClick7 = this.buttonClick7.bind(this);
      this.buttonClick8 = this.buttonClick8.bind(this);
      this.buttonClick9 = this.buttonClick9.bind(this);
      this.buttonClick10 = this.buttonClick10.bind(this);
      this.resetToDefault = this.resetToDefault.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.calculateAlbumScore = this.calculateAlbumScore.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.state = {
        selectedAlbum: this.debutContent,
        albumName: "debut",
        webTheme: "debutWebTheme",
        albumTheme: "debutAlbumTheme",
        inputTheme: "debutInputTheme",
        submitHover: "debutSubmitHover",
        buttonHover: "debutButtonHover",   
        debut: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5
        },
        fearless: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
          input18: 5,
          input19: 5,
          input20: 5,
          input21: 5,
          input22: 5,
          input23: 5,
          input24: 5,
          input25: 5
        },
        speaknow: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
          input18: 5,
          input19: 5,
          input20: 5,
          input21: 5,
          input22: 5
        },
        red: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
          input18: 5,
          input19: 5,
          input20: 5,
          input21: 5,
          input22: 5,
          input23: 5,
          input24: 5,
          input25: 5,
          input26: 5,
          input27: 5,
          input28: 5,
          input29: 5
        },
        x1989: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5
        },
        reputation: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5
        },
        lover: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
          input18: 5
        },
        folklore: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
        },
        evermore: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5
        },
        midnights: {
          input1: 5,
          input2: 5,
          input3: 5,
          input4: 5,
          input5: 5,
          input6: 5,
          input7: 5,
          input8: 5,
          input9: 5,
          input10: 5,
          input11: 5,
          input12: 5,
          input13: 5,
          input14: 5,
          input15: 5,
          input16: 5,
          input17: 5,
          input18: 5,
          input19: 5,
          input20: 5,
          input21: 5
        },
        scores: {
          debutScore: 5,
          fearlessScore: 5,
          speaknowScore: 5,
          redScore: 5,
          x1989Score: 5,
          reputationScore: 5,
          loverScore: 5,
          folkloreScore: 5,
          evermoreScore: 5,
          midnightsScore: 5
        },
        finalAlbumRanking: [],
        finalAlbumScores: []
      }
    }
    debutContent = () => {
     // debutFinalContent = ;
      return(<Album 
               title="Taylor Swift" 
               name="debut"
               albumTracks={debutTracks} 
               albumTheme="debutAlbumTheme"
               inputTheme="debutInputTheme"
               inputState={this.state.debut}
               onInputChange={this.handleInputChange}
               reset={this.resetToDefault}
               />);
    };
    fearlessContent = () => {
      return (<Album 
                title="Fearless"
                name="fearless"
                albumTracks={fearlessTracks} 
                albumTheme="fearlessAlbumTheme"
                inputTheme="fearlessInputTheme"
                inputState={this.state.fearless}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />);          
    };
    speaknowContent = () => {
      return (<Album 
                title="Speak Now" 
                name="speaknow"
                albumTracks={speaknowTracks} 
                albumTheme="speaknowAlbumTheme"
                inputTheme="speaknowInputTheme"
                inputState={this.state.speaknow}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />);          
    };
    redContent = () => {
      return (<Album 
                title="Red" 
                name="red"
                albumTracks={redTracks} 
                albumTheme="redAlbumTheme"
                inputTheme="redInputTheme"
                inputState={this.state.red}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />);          
    };
    content1989 = () => {
      return (<Album 
                title="1989" 
                name="x1989"
                albumTracks={tracks1989} 
                albumTheme="album1989Theme"
                inputTheme="input1989Theme"
                inputState={this.state.x1989}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    };
    reputationContent = () => {
      return (<Album 
                title="Reputation"
                name="reputation"
                albumTracks={reputationTracks} 
                albumTheme="reputationAlbumTheme"
                inputTheme="reputationInputTheme"
                inputState={this.state.reputation}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    };
    loverContent = () => {
      return (<Album 
                title="Lover" 
                name="lover"
                albumTracks={loverTracks} 
                albumTheme="loverAlbumTheme"
                inputTheme="loverInputTheme"
                inputState={this.state.lover}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    };
    folkloreContent = () => {
      return (<Album 
                title="folklore"
                name="folklore"
                albumTracks={folkloreTracks} 
                albumTheme="folkloreAlbumTheme"
                inputTheme="folkloreInputTheme"
                inputState={this.state.folklore}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    }
    evermoreContent = () => {
      return (<Album 
                title="evermore" 
                name="evermore"
                albumTracks={evermoreTracks} 
                albumTheme="evermoreAlbumTheme"
                inputTheme="evermoreInputTheme"
                inputState={this.state.evermore}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    };
    midnightsContent = () => {
      return (<Album 
                title="Midnights" 
                name="midnights"
                albumTracks={midnightsTracks} 
                albumTheme="midnightsAlbumTheme"
                inputTheme="midnightsInputTheme"
                inputState={this.state.midnights}
                onInputChange={this.handleInputChange}
                reset={this.resetToDefault}
                />); 
    };
    
    results = () => {
      return(<Results 
               albums={this.state.finalAlbumRanking}
               scores={this.state.finalAlbumScores} />);
    }
    buttonClick1 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.debutContent, webTheme:"debutWebTheme", albumTheme: "debutAlbumTheme", submitHover: "debutSubmitHover", buttonHover: "debutButtonHover", albumName:"debut"});
        $('body').addClass('debutWebTheme');
        $('#submit').addClass('debutSubmitHover');
        $('.AlbumButton').addClass('debutButtonHover')
      }
    buttonClick2 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.fearlessContent, webTheme:"fearlessWebTheme", albumTheme: "fearlessAlbumTheme", submitHover: "fearlessSubmitHover", buttonHover: "fearlessButtonHover", albumName:"fearless"});
        $('body').addClass('fearlessWebTheme');   
        $('#submit').addClass('fearlessSubmitHover');
        $('.AlbumButton').addClass('fearlessButtonHover')
      }
    buttonClick3 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.speaknowContent, webTheme:"speaknowWebTheme", albumTheme: "speaknowAlbumTheme", submitHover: "speaknowSubmitHover", buttonHover: "speaknowButtonHover", albumName:"speaknow"});
        $('body').addClass('speaknowWebTheme'); 
        $('#submit').addClass('speaknowSubmitHover');
        $('.AlbumButton').addClass('speaknowButtonHover')
      }
    buttonClick4 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.redContent, webTheme: "redWebTheme", albumTheme: "redAlbumTheme", submitHover: "redSubmitHover", buttonHover: "redButtonHover", albumName:"red"});
        $('body').addClass('redWebTheme');  
        $('#submit').addClass('redSubmitHover');
        $('.AlbumButton').addClass('redButtonHover')
      }
    buttonClick5 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.content1989, webTheme:"web1989Theme", albumTheme: "album1989Theme", submitHover: "submit1989Hover", buttonHover: "button1989Hover", albumName:"x1989"});
        $('body').addClass('web1989Theme');   
        $('#submit').addClass('submit1989Hover');
        $('.AlbumButton').addClass('button1989Hover')
      }
    buttonClick6 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.reputationContent, webTheme:"reputationWebTheme", albumTheme: "reputationAlbumTheme", submitHover: "reputationSubmitHover", buttonHover: "reputationButtonHover", albumName:"reputation"});
        $('body').addClass('reputationWebTheme');
        $('#submit').addClass('reputationSubmitHover');
        $('.AlbumButton').addClass('reputationButtonHover')
      }
    buttonClick7 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.loverContent, webTheme:"loverWebTheme", albumTheme: "loverAlbumTheme", submitHover: "loverSubmitHover", buttonHover: "loverButtonHover", albumName:"lover"});
        $('body').addClass('loverWebTheme');
        $('#submit').addClass('loverSubmitHover');
        $('.AlbumButton').addClass('loverButtonHover')
      }
    buttonClick8 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.folkloreContent, webTheme:"folkloreWebTheme", albumTheme: "folkloreAlbumTheme", submitHover: "folkloreSubmitHover", buttonHover: "folkloreButtonHover", albumName:"folklore"});
        $('body').addClass('folkloreWebTheme');
        $('#submit').addClass('folkloreSubmitHover');
        $('.AlbumButton').addClass('folkloreButtonHover')
      }
    buttonClick9 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.evermoreContent, webTheme:"evermoreWebTheme", albumTheme: "evermoreAlbumTheme", submitHover: "evermoreSubmitHover", buttonHover: "evermoreButtonHover", albumName:"evermore"});
        $('body').addClass('evermoreWebTheme');
        $('#submit').addClass('evermoreSubmitHover');
        $('.AlbumButton').addClass('evermoreButtonHover')
      }
    buttonClick10 = () => {
        $('body').removeClass(this.state.webTheme);
        $('#submit').removeClass(this.state.submitHover);
        $('.AlbumButton').removeClass(this.state.buttonHover);
        this.setState({selectedAlbum: this.midnightsContent, webTheme:"midnightsWebTheme", albumTheme: "midnightsAlbumTheme", submitHover: "midnightsSubmitHover", buttonHover: "midnightsButtonHover", albumName:"midnights"});
        $('body').addClass('midnightsWebTheme');
        $('#submit').addClass('midnightsSubmitHover');
        $('.AlbumButton').addClass('midnightsButtonHover')
      }
    getSubmitClasses = ()=> {
      const { albumTheme, submitHover} = this.state;
      const str = albumTheme + " " + submitHover;
      return str;
    }
    getAlbumButtonClasses = () => {
      const {buttonHover} = this.state;
      const str = buttonHover + " albumButton";
      return str;
    }
    resetToDefault = () => {
      let album = this.state.albumName;
      for (const key in this.state[album]) {
        this.setState((prevState) => ({
        [album]: {
          ...prevState[album],
            [key]: 5,
          },
        }));
      }
    }
    handleInputChange = (name, index, value) => {
      this.setState((prevState) => ({
        [name]: {
          ...prevState[name],
            [index]: value,
          },
      }));
    }
    calculateAlbumScore = (albumName) => {
      const data = this.state[albumName];
      const values = Object.values(data)
      const numericValues = values.map((value) => parseFloat(value) || 0);
      const sum = numericValues.reduce((acc, currentValue) => acc + currentValue, 0);
      const avg = (sum / values.length).toFixed(2);
      this.setState((prevState) => ({
        scores: {
          ...prevState.scores,
            [albumName + "Score"]: avg,
          },
      }), () => {
        console.log(this.state.scores);
      });
    }
    handleSubmit = () => {
      const titleList = ["debut", "fearless", "speaknow", "red", "x1989", "reputation", "lover", "folklore", "evermore", "midnights"];
      titleList.forEach((album) => {
        this.calculateAlbumScore(album);
      });
      this.setState((prevState)=> {
        const rankings = {
        "Taylor Swift": prevState.scores.debutScore,
        "Fearless": prevState.scores.fearlessScore,
        "Speak Now": prevState.scores.speaknowScore,
        "Red": prevState.scores.redScore,
        "1989": prevState.scores.x1989Score,
        "Reputation": prevState.scores.reputationScore,
        "Lover": prevState.scores.loverScore,
        "folklore": prevState.scores.folkloreScore,
        "evermore": prevState.scores.evermoreScore,
        "Midnights": prevState.scores.midnightsScore,
      };
        
      const rankingsArr = Object.entries(rankings);
      rankingsArr.sort((a,b) => b[1] - a[1]);
      const sortedAlbums = rankingsArr.map((item) => item[0]);
      const sortedScores = rankingsArr.map((item) => item[1]);
      //this.setState({finalAlbumRanking: sortedAlbums, finalAlbumScores: sortedScores, selectedAlbum: this.results});
        return{
          finalAlbumRanking: sortedAlbums,
          finalAlbumScores: sortedScores,
          selectedAlbum: this.results,
        };
      }, () => {
      });
      
    }
    render() {    
      return (
        <div className={this.state.webTheme}>
          <h1>Taylor Swift Album Rater</h1>
          <AlbumSelection 
            classes={this.getAlbumButtonClasses()}
            handleClick1={this.buttonClick1}
            handleClick2={this.buttonClick2}
            handleClick3={this.buttonClick3}
            handleClick4={this.buttonClick4}
            handleClick5={this.buttonClick5}
            handleClick6={this.buttonClick6}
            handleClick7={this.buttonClick7}
            handleClick8={this.buttonClick8}
            handleClick9={this.buttonClick9}
            handleClick10={this.buttonClick10}
            />
          {this.state.selectedAlbum()}
          <div id="submit" className={this.getSubmitClasses()} onClick={this.handleSubmit}>
            GET FINAL RANKING
          </div>
        </div>
      );
    }
  }
export default App