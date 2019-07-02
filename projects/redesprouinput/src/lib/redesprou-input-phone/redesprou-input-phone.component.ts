import { Component, OnInit, Input, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import {ControlValueAccessor, FormGroup, FormBuilder, Validators} from '@angular/forms'
const noop = () => { };

@Component({
  selector: 'tm-redesprou-input-phone',
  templateUrl: './redesprou-input-phone.component.html',
  styleUrls: ['./redesprou-input-phone.component.css', './redesprou-input.scss'],
   encapsulation: ViewEncapsulation.None
})
export class RedesprouInputPhoneComponent implements OnInit, ControlValueAccessor {
  public openList = false;
  form: FormGroup;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  writeValue(value: any) {
    if(value) {
      const countryData = {name: 'Brasil', iso2: 'br', code: '+55'}; 
      this.form.get('fullTelephone').setValue(value);
      this.form.get('countryCode').setValue(countryData.code);
      this.form.get('telephone').setValue(value);
      this.form.get('flag').setValue(countryData.iso2.toLowerCase());
      this.onChangeCallback(this.form.get('fullTelephone').value);
    } 
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    
  }

  constructor(private fb: FormBuilder, private eRef: ElementRef ) {
      //this.settings = new PhoneInputSettings();
      //this.telephoneUtils = new TelephoneUtils();
  }

  ngOnInit() {
    this.initializeForm();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target))
      this.openList = false;
  }

  initializeForm() {
    this.form = this.fb.group({
      countryCode: ['+55', Validators.required],
      telephone: [null, Validators.required],
      fullTelephone: [null],
      flag: ['br', Validators.required],
    });
  }

  toggleList() {
    this.openList = !this.openList;
  }

  changeCountryCode(code, flag) {
    this.form.get('countryCode').setValue(code);
    this.form.get('flag').setValue(flag);
    this.telephoneChanged();
    this.toggleList();
  }

  getCountryFlag(): string {
    return 'flag-icon-' + this.form.get('flag').value; 
  }

  telephoneChanged(): void {
      const code = this.form.get('countryCode').value;
      const phone = this.form.get('telephone').value
      this.form.get('fullTelephone').setValue(code + phone);
      this.onChangeCallback(this.form.get('fullTelephone').value);
  }

  getPhoneMask(): string {
    //return MaskUtils.getTelephoneMaskByCountry(this.form.get('telephone').value, this.form.get('countryCode').value)
    return null;
  }
}
