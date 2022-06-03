var Section = function(){}
var PersonalSection = new Section();
var AlbumSection = new Section();
var PatentSection = new Section();
var PublicationSection = new Section();

const SNS = function(){
    SNS.prototype.sections = {};
    SNS.prototype.createProfile = function(){};
    SNS.prototype.getSections = function(){
        return this.sections;
    }
    SNS.prototype.addSection = function(section){
        this.sections.push(section)
    }
}

const Facebook = new SNS();
Facebook.prototype.createProfile = function(){
    addSection(new PersonalSection());
    addSection(new PatentSection());
    addSection(new PublicationSection());
}
const Twitter = new SNS();
Twitter.prototype.createProfile = function(){
    addSection(new PersonalSection());
    addSection(new AlbumSection());
}
var sns = new Facebook();
sns.createProfile();
console.log(sns.getSections());